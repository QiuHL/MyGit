/**
 * Created by qhl on 2015/6/9.
 */

var mResources = [
    {"name": "1"},
    {"name": "2"},
    {"name": "3"},
    {"name": "4"},
    {"name": "5"},
    {"name": "6"},
    {"name": "7"},
    {"name": "8"},
];

var mMapPos;
var mTargetObj = {
    "key":0, //��Դ���
    "count":0, //����
    "points": [], //λ������
};
var otherObj = {

}

var mGuanQia = 0;

//��ʼ���ؿ�
function initMap(guanQia) {
    var cell = 9;
    var row = 9;
    mMapPos = new Array();
    for (var i = 0; i < cell; i++) {
        mMapPos[i] = new Array();
        for (var j = 0; j < row; j++) {
            mMapPos[i][j] = null;
        }
    }

    var targetKey = genTargetKey();
    var targetAmount = Math.ceil(Math.random() * 5 + 1);
    mTargetObj.key = targetKey;
    mTargetObj.count = targetAmount;
    mTargetObj.points  = new Array();
    var genFinish = false;
    var points = 0;
    while (!genFinish) {
        var point = genPos(cell, row);
        if (!isPosExists(point[0], point[1])) {
            mTargetObj.points[points] = point;
            points++;
        }
        if (points == targetAmount) {
            genFinish = true;
        }
    }
    console.log("gen map finish! targetKey=%d, targetAmount=%d, ", targetKey, targetAmount);
    for (var i in mTargetObj.points) {
        var pos = mTargetObj.points[i];
        console.log("map points: %s, pos = %d, %d", i, pos[0], pos[1])
    }
}

//����Ŀ����
function genTargetKey() {
    var resources = mResources.length;
    return Math.floor(Math.random() * resources);
}

//����Ŀ������
function genPos(cell, row) {
    var x = Math.floor(Math.random() * cell);
    var y = Math.floor(Math.random() * row);
    return [x, y];
}

//�ж��Ƿ����ظ�����
function isPosExists(x, y) {
    for (var i in mTargetObj.points) {
        var pos = mTargetObj.points[i];
        if ((pos.x == x) && (pos.y == y)) {
            return true;
        }
    }
    return false;
}