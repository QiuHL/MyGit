/**
 * Created by QHL on 2015/6/15.
 */

var AlertView = {
    createNew : function () {
        var view = BaseView.createNew();
        var info = new LTextField();
        info.text = "JaveScript Class";
        view.addChild(info);
        return view;
    }
}