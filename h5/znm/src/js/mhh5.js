/**
 * Created by QHL on 2015/6/17.
 */

var mhh5 = ( function () {
    //基础显示类
    var BaseView = {
            createNew : function () {
                var viewer = new LSprite();
                return viewer;
            }
        },

        //图片按钮
        ImgButton = {
            //buttonImg 下载的图片数据
            createNew : function (buttonImg) {
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

        //提示框
        AlertView = {
            createNew : function () {
                var w = LGlobal.width,
                    h = LGlobal.height,
                    view = BaseView.createNew(),
                    bgData = new LBitmapData("#000000", 0, 0, w, h),
                    bg = new LBitmap(bgData),
                    info = new LTextField(),
                    btnOk = ImgButton.createNew(mImgDataList["okbutton"]);
                view.alpha = 0.6;
                view.addChild(bg);
                info.text = "JaveScript Class";
                info.x = (w - info.getWidth()) * 0.5;
                info.y = (h - info.getHeight()) * 0.5;
                view.addChild(info);
                btnOk.x = (w - btnOk.getWidth()) * 0.5;
                btnOk.y = h - btnOk.getHeight() - 50;
                btnOk.addEventListener(LMouseEvent.MOUSE_DOWN, okClickHandler);
                return view;
            }
        };

    return {
        BaseView : BaseView,
        AlertView : AlertView,
        ImgButton : ImgButton,
    };
})();