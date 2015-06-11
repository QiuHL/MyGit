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
];

var mImgDataList=[];//下载的图片数据
var mBitmapData = [];//图片数据实例

var mMapKey; //棋盘所有格子的图片编号
var mMapImage; //棋盘所有格子的图片实例

var mLoadingLayer; //加载进度条
var mBackLayer; //背景层
var mImgLayer; //棋盘层
var mInfoLayer; //信息层

var mTargetObj = {
    "key":0, //目标图片编号
    "count":0, //目标数量
    "points": [], //目标坐标集合
};

var mGuanQia = 0; //全局变量 当前关卡编号
var mCell = 0; //全局变量 行数
var mRow = 0; //全局变量 列数
var mSelected = {};

function main() {
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
        mResources,
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
    for (var i = 0; i < mImgDataList.length; i++) {
        mBitmapData[i] = new LBitmapData(mImgDataList[i]);
    }
}

//初始化棋盘
function initMap(guanQia) {
    var cell = 6;
    var row = 6;

    mGuanQia = guanQia;
    mCell = cell;
    mRow = row;
    mSelected = {};

    mMapKey = new Array();
    for (var i = 0; i < cell; i++) {
        mMapKey[i] = new Array();
        for (var j = 0; j < row; j++) {
            mMapKey[i][j] = -1;
        }
    }

    var targetKey = genTargetKey();
    var targetAmount = Math.ceil(Math.random() * 5 + 1);
    mTargetObj.key = targetKey;
    mTargetObj.count = targetAmount;
    mTargetObj.points  = new Array();

    mInfoLayer.removeAllChild();
    var infoText = new LTextField();
    infoText.text = "寻找 " + targetAmount + " 个";
    infoText.y = 10;
    mInfoLayer.addChild(infoText);
    var targetBitmap = new LBitmap(mBitmapData[targetKey]);
    targetBitmap.x = 100;
    mInfoLayer.addChild(targetBitmap);

    var genFinish = false;
    var points = 0;
    while (!genFinish) {
        var point = genPos(cell, row);
        var x = point[0];
        var y = point[1];
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
    for (var i = 0; i < cell; i++) {
        for (var j = 0; j < row; j++) {
            if (!isPosExists(i, j)) {
                var otherKey = genOtherKey(targetKey);
                mMapKey[i][j] = otherKey;
            }
        }
    }
    console.log("gen finish");

    fillMap(cell, row);
}

//删除棋盘内图片控件
function clearMapImage() {
    mMapImage = null;
    mImgLayer.removeAllChild();
}

//填充棋盘
function fillMap(cell, row) {
    clearMapImage();
    for (var i = 0; i < cell; i++) {
        for (var j = 0; j < row; j++) {
            var key = mMapKey[i][j];
            if (key != mTargetObj.key) {
                //console.log("other key", key);
                //continue;
            }
            else {
                //console.log("target key", key);
            }
            var fileName = "images/" + key + ".gif";
            var bitmap = new LBitmap(mBitmapData[key]);
            bitmap.x = i * 45;
            bitmap.y = j * 45;
            var bitmapButton = new LButton(bitmap, bitmap);
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
    var x = Math.floor(Math.random() * cell);
    var y = Math.floor(Math.random() * row);
    return [x, y];
}

//目标坐标是否已存在
function isPosExists(x, y) {
    for (var i = 0; i < mTargetObj.points.length; i++) {
        var pos = mTargetObj.points[i];
        if ((pos[0] == x) && (pos[1] == y)) {
            return true;
        }
    }
    return false;
}

//生成其它坐标
function genOtherKey(targetKey) {
    var resources = mResources.length;
    var otherKey = Math.floor(Math.random() * resources);
    while (otherKey == targetKey) {
        otherKey = Math.floor(Math.random() * resources);
    }
    return otherKey;
}

//图片点击
function imgClickHandler(event) {
    var index = event.clickTarget.index;
    console.log(index);
    //判断是否已点击过
    for (var i = 0; i < mSelected.length; i++) {
        if (index == mSelected[i]) {
            return;
        }
    }

    var pos = index2pos(index);
    if (isPosExists(pos.x, pos.y)) {
        var selected = mSelected.push(index);
        if (selected == mTargetObj.count) {
            //已全部选出
        }
    }
}

//根据index转换成pos
function index2pos(index) {
    var x = index % mRow;
    var y = (index - x) / mRow;
    return [x, y];
}