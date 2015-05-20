namespace WebSpider
{
    partial class formMain
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.buttonCatch = new System.Windows.Forms.Button();
            this.textBoxUrl = new System.Windows.Forms.TextBox();
            this.tabControlWebView = new System.Windows.Forms.TabControl();
            this.tabPageWebContent = new System.Windows.Forms.TabPage();
            this.webBrowserView = new System.Windows.Forms.WebBrowser();
            this.tabPageUrlList = new System.Windows.Forms.TabPage();
            this.checkedListBoxUrls = new System.Windows.Forms.CheckedListBox();
            this.tabPageWebCode = new System.Windows.Forms.TabPage();
            this.textBoxWebCode = new System.Windows.Forms.TextBox();
            this.tabControlWebView.SuspendLayout();
            this.tabPageWebContent.SuspendLayout();
            this.tabPageUrlList.SuspendLayout();
            this.tabPageWebCode.SuspendLayout();
            this.SuspendLayout();
            // 
            // buttonCatch
            // 
            this.buttonCatch.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.buttonCatch.Location = new System.Drawing.Point(626, 12);
            this.buttonCatch.Name = "buttonCatch";
            this.buttonCatch.Size = new System.Drawing.Size(75, 23);
            this.buttonCatch.TabIndex = 0;
            this.buttonCatch.Text = "Catch";
            this.buttonCatch.UseVisualStyleBackColor = true;
            this.buttonCatch.Click += new System.EventHandler(this.buttonCatch_Click);
            // 
            // textBoxUrl
            // 
            this.textBoxUrl.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.textBoxUrl.Location = new System.Drawing.Point(12, 12);
            this.textBoxUrl.Name = "textBoxUrl";
            this.textBoxUrl.Size = new System.Drawing.Size(608, 21);
            this.textBoxUrl.TabIndex = 2;
            this.textBoxUrl.Text = "http://h5.6761.com/game.php?gid=37";
            // 
            // tabControlWebView
            // 
            this.tabControlWebView.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.tabControlWebView.Controls.Add(this.tabPageWebContent);
            this.tabControlWebView.Controls.Add(this.tabPageUrlList);
            this.tabControlWebView.Controls.Add(this.tabPageWebCode);
            this.tabControlWebView.Location = new System.Drawing.Point(13, 40);
            this.tabControlWebView.Name = "tabControlWebView";
            this.tabControlWebView.SelectedIndex = 0;
            this.tabControlWebView.Size = new System.Drawing.Size(688, 434);
            this.tabControlWebView.TabIndex = 4;
            // 
            // tabPageWebContent
            // 
            this.tabPageWebContent.Controls.Add(this.webBrowserView);
            this.tabPageWebContent.Location = new System.Drawing.Point(4, 22);
            this.tabPageWebContent.Name = "tabPageWebContent";
            this.tabPageWebContent.Padding = new System.Windows.Forms.Padding(3);
            this.tabPageWebContent.Size = new System.Drawing.Size(680, 408);
            this.tabPageWebContent.TabIndex = 0;
            this.tabPageWebContent.Text = "tabPage1";
            this.tabPageWebContent.UseVisualStyleBackColor = true;
            // 
            // webBrowserView
            // 
            this.webBrowserView.Dock = System.Windows.Forms.DockStyle.Fill;
            this.webBrowserView.Location = new System.Drawing.Point(3, 3);
            this.webBrowserView.MinimumSize = new System.Drawing.Size(20, 20);
            this.webBrowserView.Name = "webBrowserView";
            this.webBrowserView.ScriptErrorsSuppressed = true;
            this.webBrowserView.Size = new System.Drawing.Size(674, 402);
            this.webBrowserView.TabIndex = 0;
            this.webBrowserView.DocumentCompleted += new System.Windows.Forms.WebBrowserDocumentCompletedEventHandler(this.webBrowserView_DocumentCompleted);
            this.webBrowserView.FileDownload += new System.EventHandler(this.webBrowserView_FileDownload);
            this.webBrowserView.Navigating += new System.Windows.Forms.WebBrowserNavigatingEventHandler(this.webBrowserView_Navigating);
            this.webBrowserView.NewWindow += new System.ComponentModel.CancelEventHandler(this.webBrowserView_NewWindow);
            // 
            // tabPageUrlList
            // 
            this.tabPageUrlList.Controls.Add(this.checkedListBoxUrls);
            this.tabPageUrlList.Location = new System.Drawing.Point(4, 22);
            this.tabPageUrlList.Name = "tabPageUrlList";
            this.tabPageUrlList.Padding = new System.Windows.Forms.Padding(3);
            this.tabPageUrlList.Size = new System.Drawing.Size(680, 408);
            this.tabPageUrlList.TabIndex = 1;
            this.tabPageUrlList.Text = "tabPage2";
            this.tabPageUrlList.UseVisualStyleBackColor = true;
            // 
            // checkedListBoxUrls
            // 
            this.checkedListBoxUrls.Dock = System.Windows.Forms.DockStyle.Fill;
            this.checkedListBoxUrls.FormattingEnabled = true;
            this.checkedListBoxUrls.Location = new System.Drawing.Point(3, 3);
            this.checkedListBoxUrls.Name = "checkedListBoxUrls";
            this.checkedListBoxUrls.Size = new System.Drawing.Size(674, 402);
            this.checkedListBoxUrls.TabIndex = 0;
            // 
            // tabPageWebCode
            // 
            this.tabPageWebCode.Controls.Add(this.textBoxWebCode);
            this.tabPageWebCode.Location = new System.Drawing.Point(4, 22);
            this.tabPageWebCode.Name = "tabPageWebCode";
            this.tabPageWebCode.Size = new System.Drawing.Size(680, 408);
            this.tabPageWebCode.TabIndex = 2;
            this.tabPageWebCode.Text = "tabPage2";
            this.tabPageWebCode.UseVisualStyleBackColor = true;
            // 
            // textBoxWebCode
            // 
            this.textBoxWebCode.Dock = System.Windows.Forms.DockStyle.Fill;
            this.textBoxWebCode.Location = new System.Drawing.Point(0, 0);
            this.textBoxWebCode.Multiline = true;
            this.textBoxWebCode.Name = "textBoxWebCode";
            this.textBoxWebCode.Size = new System.Drawing.Size(680, 408);
            this.textBoxWebCode.TabIndex = 0;
            // 
            // formMain
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(713, 486);
            this.Controls.Add(this.tabControlWebView);
            this.Controls.Add(this.textBoxUrl);
            this.Controls.Add(this.buttonCatch);
            this.Name = "formMain";
            this.Text = "Form1";
            this.tabControlWebView.ResumeLayout(false);
            this.tabPageWebContent.ResumeLayout(false);
            this.tabPageUrlList.ResumeLayout(false);
            this.tabPageWebCode.ResumeLayout(false);
            this.tabPageWebCode.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button buttonCatch;
        private System.Windows.Forms.TextBox textBoxUrl;
        private System.Windows.Forms.TabControl tabControlWebView;
        private System.Windows.Forms.TabPage tabPageWebContent;
        private System.Windows.Forms.WebBrowser webBrowserView;
        private System.Windows.Forms.TabPage tabPageUrlList;
        private System.Windows.Forms.CheckedListBox checkedListBoxUrls;
        private System.Windows.Forms.TabPage tabPageWebCode;
        private System.Windows.Forms.TextBox textBoxWebCode;
    }
}

