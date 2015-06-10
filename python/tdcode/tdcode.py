# -*- coding: UTF-8 -*-  

import urllib
import urllib2

def main():
	params = {"text":"mh"}
	s = urllib.urlencode(params)
	url = "http://qr.liantu.com/api.php?text="+s
	print(url)
	req = urllib2.Request(url)
	response = urllib2.urlopen(req)
	html = response.read()
	path = r"E:\GitHub\MyGit\python\tdcode\1.jpg"
	f = file(path, "wb")
	f.write(html)
	f.close()

if __name__ == "__main__":
	main()