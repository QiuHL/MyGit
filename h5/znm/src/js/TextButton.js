/**
 * Created by QHL on 2015/6/15.
 */

var TextButton = {
    createNew : function (text) {
        var button,
            upPanel, overPanel, downPanel,
            title;
        upPanel = new LPanel("#666666",200,50);
        title = new LTextField();
        title.text = text;
        title.color = "#FF0000";
        title.size = 20;
        title.x = (upPanel.getWidth() - title.getWidth())*0.5;
        title.y = (upPanel.getHeight() - title.getHeight())*0.5;
        upPanel.addChild(title);
        overPanel = new LPanel("#999999",200,50);
        title = new LTextField();
        title.text = text;
        title.color = "#FF0000";
        title.size = 20;
        title.x = (overPanel.getWidth() - title.getWidth())*0.5;
        title.y = (overPanel.getHeight() - title.getHeight())*0.5;
        overPanel.addChild(title);
        downPanel = new LPanel("#CCCCCC",200,50);
        title = new LTextField();
        title.text = text;
        title.color = "#FF0000";
        title.size = 20;
        title.x = (downPanel.getWidth() - title.getWidth())*0.5;
        title.y = (downPanel.getHeight() - title.getHeight())*0.5;
        downPanel.addChild(title);
        button = new LButton(upPanel, overPanel, downPanel);
        return button;
    }
}