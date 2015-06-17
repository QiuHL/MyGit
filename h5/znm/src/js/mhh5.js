/**
 * Created by QHL on 2015/6/17.
 */

var mhh5 = {
    //������ʾ��
    BaseView : {
        createNew : function () {
            var viewer = new LSprite();
            return viewer;
        }
    },

    //��ʾ��
    AlertView : {
        createNew: function () {
            var view = BaseView.createNew();
            var info = new LTextField();
            info.text = "JaveScript Class";
            view.addChild(info);
            return view;
        }
    },

    //ͼƬ��ť
    ImgButton : {
        //buttonImg ���ص�ͼƬ����
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