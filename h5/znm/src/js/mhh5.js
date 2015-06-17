/**
 * Created by QHL on 2015/6/17.
 */

var mhh5 = {
    //基础显示类
    BaseView : {
        createNew : function () {
            var viewer = new LSprite();
            return viewer;
        }
    },

    //提示框
    AlertView : {
        createNew: function () {
            var view = BaseView.createNew();
            var info = new LTextField();
            info.text = "JaveScript Class";
            view.addChild(info);
            return view;
        }
    },

    //图片按钮
    ImgButton : {
        //buttonImg 下载的图片数据
        createNew: function (buttonImg) {
            var button,
                upPanel, overPanel, downPanel,
                title;
            var bitmapDataUp = new LBitmapData(buttonImg, 0, 0, 98, 48);
            var bitmapUp = new LBitmap(bitmapDataUp);
            var bitmapDataOver = new LBitmapData(buttonImg, 0, 48, 98, 48);
            var bitmapOver = new LBitmap(bitmapDataOver);
            button = new LButton(bitmapUp, bitmapOver);
            return button;
        }
    },
}