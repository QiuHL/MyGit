/**
 * Created by qhl on 2015/6/9.
 */

var mResources = [
        {"name": "0", "path":"images/0.gif"},
        {"name": "1", "path":"images/1.gif"},
        {"name": "2", "path":"images/2.gif"},
        {"name": "3", "path":"images/3.gif"},
        {"name": "4", "path":"images/4.gif"},
        {"name": "5", "path":"images/5.gif"},
        {"name": "6", "path":"images/6.gif"},
    ],

    mOtherRes = [
        {"name": "selected", "path":"images/selected.gif"},
        {"name": "okbutton", "path":"images/ok_button.png"},
    ],

    mImgDataList=[],//下载的图片数据
    mBitmapData,//图片数据实例

    mMapKey, //棋盘所有格子的图片编号
    mMapImage, //棋盘所有格子的图片实例

    mLoadingLayer, //加载进度条
    mBackLayer, //背景层
    mImgLayer, //棋盘层
    mInfoLayer, //信息层
    mAlertLayer, //提示层
    mInfoBitmap, //目标图片实例
    mInfoText, //提示信息1
    mInfoLeft, //提示信息2
    mInfoTime, //倒计时时间显示
    mCDTime, //倒计时时间
    mCDHandler, //倒计时句柄
    mPauseButton, //暂停按钮

    mTargetObj = {
        "key":0, //目标图片编号
        "count":0, //目标数量
        "points": [], //目标坐标集合
    },

    mGuanQia = 0, //全局变量 当前关卡编号
    mCell = 0, //全局变量 行数
    mRow = 0, //全局变量 列数
    mSelected = [];

function main() {
    console.log("lufylegend");
    LGlobal.align = LStageAlign.BOTTOM_MIDDLE;
    LGlobal.stageScale = LStageScaleMode.SHOW_ALL;
    LSystem.screen(LStage.FULL_SCREEN);

    mBackLayer = new LSprite();
    addChild(mBackLayer);

    mLoadingLayer = new LoadingSample3();
    mBackLayer.addChild(mLoadingLayer);
    mInfoLayer = new LSprite();
    mBackLayer.addChild(mInfoLayer);
    mImgLayer = new LSprite();
    mImgLayer.y = 50;
    mBackLayer.addChild(mImgLayer);

    /**
     * 加载资源
     */
    LLoadManage.load(
        mResources.concat(mOtherRes),
        function(press){
            mLoadingLayer.setProgress(press);
        },
        function(result){
            mImgDataList = result;
            mBackLayer.removeChild(mLoadingLayer);
            mLoadingLayer = null;//删除进度条

            initImage();
            initMap(0);
        }
    );
}

//初始化图片数据
function initImage() {
    mBitmapData = new Array();
    console.log("image data:", mImgDataList);
    for (var key in mImgDataList) {
        console.log("image key:", key);
        mBitmapData[key] = new LBitmapData(mImgDataList[key]);
    }
}

//初始化棋盘
function initMap(guanQia) {
    var cell = 6, row = 6,
        i, j,
        targetKey, targetAmount,
        genFinish, points, point,
        x, y,
        otherKey;

    mGuanQia = guanQia;
    mCell = cell;
    mRow = row;
    mSelected = new Array();

    mMapKey = new Array();
    for (i = 0; i < cell; i++) {
        mMapKey[i] = new Array();
        for (j = 0; j < row; j++) {
            mMapKey[i][j] = -1;
        }
    }

    targetKey = genTargetKey();
    targetAmount = Math.ceil(Math.random() * 5 + 1);
    mTargetObj.key = targetKey;
    mTargetObj.count = targetAmount;
    mTargetObj.points  = new Array();

    mInfoLayer.removeAllChild();
    mInfoText = new LTextField();
    mInfoText.text = "寻找 " + targetAmount + " 个";
    mInfoText.y = 10;
    mInfoLayer.addChild(mInfoText);
    mInfoBitmap = new LBitmap(mBitmapData[targetKey]);
    mInfoBitmap.x = 70;
    mInfoLayer.addChild(mInfoBitmap);
    mInfoLeft = new LTextField();
    mInfoLeft.text = "剩余 " + targetAmount + " 个";
    mInfoLeft.x = 120;
    mInfoLeft.y = 10;
    mInfoLayer.addChild(mInfoLeft);
    mInfoTime = new LTextField();
    mInfoTime.x = 200;
    mInfoTime.y = 10;
    mInfoLayer.addChild(mInfoTime);
    mPauseButton = mhh5.ImgButton.createNew(mImgDataList["okbutton"]);
    mPauseButton.addEventListener(LMouseEvent.MOUSE_DOWN, pauseClickHandler);
    mInfoLayer.addChild(mPauseButton);

    genFinish = false;
    points = 0;
    while (!genFinish) {
        point = genPos(cell, row);
        x = point[0];
        y = point[1];
        if (!isPosExists(x, y)) {
            mTargetObj.points[points] = point;
            mMapKey[x][y] = targetKey;
            points++;
        }
        if (points == targetAmount) {
            genFinish = true;
        }
    }
    console.log("gen map finish! targetKey=%d, targetAmount=%d, ", targetKey, targetAmount);

    //生成非目标数据
    for (i = 0; i < cell; i++) {
        for (j = 0; j < row; j++) {
            if (!isPosExists(i, j)) {
                otherKey = genOtherKey(targetKey);
                mMapKey[i][j] = otherKey;
            }
        }
    }
    console.log("gen finish");

    fillMap(cell, row);

    mCDTime = 500;
    mCDHandler = setInterval("countDown(true)", 10);
}

//删除棋盘内图片控件
function clearMapImage() {
    mMapImage = null;
    mImgLayer.removeAllChild();
}

//填充棋盘
function fillMap(cell, row) {
    clearMapImage();
    var i, j,
        key,
        fileName, bitmap, bitmapButton;
    for (i = 0; i < cell; i++) {
        for (j = 0; j < row; j++) {
            key = mMapKey[i][j];
            if (key != mTargetObj.key) {
                //console.log("other key", key);
                //continue;
            }
            else {
                //console.log("target key", key);
            }
            fileName = "images/" + key + ".gif";
            bitmap = new LBitmap(mBitmapData[key]);
            bitmap.x = i * 45;
            bitmap.y = j * 45;
            bitmapButton = new LButton(bitmap, bitmap);
            bitmapButton.index = j * row + i;
            bitmapButton.addEventListener(LMouseEvent.MOUSE_DOWN, imgClickHandler);
            mImgLayer.addChild(bitmapButton);
        }
    }
}

//生成目标图片编号
function genTargetKey() {
    var resources = mResources.length;
    return Math.floor(Math.random() * resources);
}

//随机生成目标坐标
function genPos(cell, row) {
    var x, y;
    x = Math.floor(Math.random() * cell);
    y = Math.floor(Math.random() * row);
    return [x, y];
}

//目标坐标是否已存在
function isPosExists(x, y) {
    var i, pos;
    for (i = 0; i < mTargetObj.points.length; i++) {
        pos = mTargetObj.points[i];
        if ((pos[0] == x) && (pos[1] == y)) {
            return true;
        }
    }
    return false;
}

//生成其它坐标
function genOtherKey(targetKey) {
    var resources = mResources.length,
        otherKey = Math.floor(Math.random() * resources);
    while (otherKey == targetKey) {
        otherKey = Math.floor(Math.random() * resources);
    }
    return otherKey;
}

//图片点击
function imgClickHandler(event) {
    var index = event.clickTarget.index,
        i, pos, x, y,
        selectedGif, selected,
        leftAmount;
    console.log(index, mSelected);
    //判断是否已点击过
    for (i = 0; i < mSelected.length; i++) {
        if (index == mSelected[i]) {
            console.log("clicked");
            return;
        }
    }

    pos = index2pos(index);
    x = pos[0];
    y = pos[1];
    if (isPosExists(x, y)) {
        //显示选中效果
        selectedGif = new LBitmap(mBitmapData["selected"]);
        selectedGif.x = x * 45;
        selectedGif.y = y * 45;
        console.log("show selected:", x, y);
        mImgLayer.addChild(selectedGif);

        selected = mSelected.push(index);
        leftAmount = mTargetObj.count - selected;
        console.log("selected push", selected, mTargetObj.count, leftAmount);
        mInfoLeft.text = "剩余 " + leftAmount + " 个";
        if (selected == mTargetObj.count) {
            //已全部选出
            console.log("guanqia finish");
            return;
        }
    }
}

//根据index转换成pos
function index2pos(index) {
    var x = index % mRow,
        y = (index - x) / mRow;
    console.log("index2pos", index, mRow, x, y);
    return [x, y];
}

//倒计时
function countDown(isBegin) {
    var sec, milSec;
    //console.log("countdown", mCDTime);
    if (isBegin) {
        mCDTime = mCDTime - 1;
        if (mCDTime <= 0) {
            countDown(false);
        }
    }
    else {
        clearInterval(mCDHandler);
    }
    sec = Math.floor(mCDTime / 100);
    milSec = (mCDTime - sec * 100);
    mInfoTime.text = "剩余：" + sec + "\'" + milSec;
}

function pauseClickHandler(event) {
    var alertView = mhh5.AlertView.createNew();
    mBackLayer.addChild(alertView);
    alert("alert");
}