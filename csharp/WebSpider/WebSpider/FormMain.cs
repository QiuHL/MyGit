using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WebSpider
{
    public partial class formMain : Form
    {
        public formMain()
        {
            InitializeComponent();
        }

        private void buttonCatch_Click(object sender, EventArgs e)
        {
            checkedListBoxUrls.Items.Clear();
            textBoxWebCode.Text = "";
            webBrowserView.Navigate(textBoxUrl.Text);
            webBrowserView.Refresh();
        }

        private void webBrowserView_Navigating(object sender, WebBrowserNavigatingEventArgs e)
        {
            //checkedListBoxUrls.Items.Add(e.Url.ToString());
        }

        private void webBrowserView_NewWindow(object sender, CancelEventArgs e)
        {
            //checkedListBoxUrls.Items.Add(e.ToString());
        }

        private void webBrowserView_FileDownload(object sender, EventArgs e)
        {
            //checkedListBoxUrls.Items.Add(e.ToString());
        }

        private void webBrowserView_DocumentCompleted(object sender, WebBrowserDocumentCompletedEventArgs e)
        {
            HtmlElementCollection links = webBrowserView.Document.All;
            foreach (HtmlElement link in links)
            {
                if (link.InnerHtml != null)
                {
                    checkedListBoxUrls.Items.Add(link.InnerHtml);
                    textBoxWebCode.Text += link.InnerHtml + "\r\n\r\n";
                }
            }
            //textBoxWebCode.Text = webBrowserView.Document.Links.ToString();
        }
    }
}
