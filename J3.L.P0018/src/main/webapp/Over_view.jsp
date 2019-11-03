<%-- 
    Document   : Over_view
    Created on : Nov 3, 2019, 11:35:09 PM
    Author     : aaa
--%>

<%-- 
    Document   : Home
    Created on : Oct 28, 2019, 9:48:41 PM
    Author     : aaa
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="articleDAO" class="dao.ArticleDAOImpl"/>
<!DOCTYPE html>
<!DOCTYPE html>
<!-- saved from url=(0045)http://us-123fashion.simplesite.com/410906719 -->
<html lang="en-US" class=""><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> Overview </title>
<meta property="og:site_name" content="My Fashion Blog">
<meta property="article:publisher" content="https://www.facebook.com/simplesite">
<meta property="og:locale" content="en-US">
<meta property="og:url" content="http://us-123fashion.simplesite.com/410906719">
<meta property="og:title" content="Blog">
<meta property="og:description" content="In New York - Claritas est etiam processus dynamicus, qui sequitur">
<meta property="og:image" content="http://cdn.simplesite.com/i/25/d7/284852684260562725/i284852689410723512._szw1280h1280_.jpg">
<meta property="og:updated_time" content="2017-01-04T04:29:08.0301156+00:00">
<meta property="og:type" content="blog">
<meta name="robots" content="nofollow">

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="My Fashion Blog - http://us-123fashion.simplesite.com/">
        <link rel="stylesheet" type="text/css" href="./home_files/3623582.design.v25490.css">
<link rel="canonical" href="http://us-123fashion.simplesite.com/410906719">
<link rel="alternate" type="application/rss+xml" href="http://us-123fashion.simplesite.com/410906719/feed.rss" title="My Fashion Blog RSS feed">
<link rel="alternate" type="application/atom+xml" href="http://us-123fashion.simplesite.com/410906719/atomFeed.rss" title="My Fashion Blog RSS feed">
                <link rel="shortcut icon" href="data:image/x-icon;,">
<link rel="stylesheet" type="text/css" href="./home_files/jplayer.pink.flag.min.css">
        <script type="text/javascript" async="" src="./home_files/analytics.js.download"></script><script async="" src="./home_files/gtm.js.download"></script><script type="text/javascript" src="./home_files/FrontendAppLocalePage.aspx"></script>
                <script type="text/javascript" src="./home_files/frontendApp.min.js.download"></script>
        <script type="text/javascript">if(typeof window.jQuery=="undefined"){(function(){var a=document.createElement("script");a.type="text/javascript";a.src="/c/js/version3/frontendApp/init/frontendApp.min.js?_v=c3745b49b3583731aea941058c4b63a8";document.getElementsByTagName('head')[0].appendChild(a);})();}</script>

                <script type="text/javascript">var css_simplesite_com_fallback_element = document.getElementById('css_simplesite_com_fallback');
if(typeof css_simplesite_com_fallback_element !== 'undefined' && css_simplesite_com_fallback_element !== null){
var isVisible = css_simplesite_com_fallback_element.offsetParent !== null
if(isVisible){
var head = document.head, link = document.createElement('link');

link.type = 'text/css';
link.rel = 'stylesheet';
link.href = '{/d/designs/3623582.design.v25490.css}';

head.appendChild(link);
}
}</script>
    <style type="text/css">.fancybox-margin{margin-right:17px;}</style></head>
    <body data-pid="410906719" data-iid="">


        
        
        <div class="container-fluid site-wrapper"> <!-- this is the Sheet -->
            <div class="container-fluid header-wrapper " id="header"> <!-- this is the Header Wrapper -->
    <div class="container">
<div class="title-wrapper">
	<div class="title-wrapper-inner">
	    <a rel="nofollow" class="logo " href="http://us-123fashion.simplesite.com/">
	    </a>
	    <div class="title ">
	        My Fashion Blog
	    </div>
	    <div class="subtitle">
	        Welcome to this website
	    </div>
	</div>
</div>  <!-- these are the titles -->
<div class="navbar navbar-compact">
    <div class="navbar-inner">
        <div class="container">
            <!-- .btn-navbar is used as the toggle for collapsed navbar content -->
            <a rel="nofollow" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse" title="Toggle menu">
                <span class="menu-name">Menu</span>
                <span class="menu-bars">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </span>
            </a>
            


            <!-- Everything you want hidden at 940px or less, place within here -->
            <div class="nav-collapse collapse">
                <ul class="nav" id="topMenu" data-submenu="horizontal">
<li class=" active " style="">
    <a rel="nofollow" href="Home.jsp">My Fashion Blog</a>
</li><li class="  " style="">
    <a rel="nofollow" href="About_me.jsp">About me</a>
</li><li class="  " style="">
    <a rel="nofollow" href="Contact.jsp">Contact</a>
</li>                </ul>
            </div>
        </div>
    </div>
</div>
  <!-- this is the Menu content -->
    </div>
</div>  <!-- this is the Header content -->

            <div class="container-fluid content-wrapper" id="content"> <!-- this is the Content Wrapper -->
    <div class="container">
        <div class="row-fluid content-inner">
            <div id="left" class="span9"> <!-- ADD "span12" if no sidebar, or "span9" with sidebar -->
                <div class="wrapper blog">
                	<div class="heading">
    	<h1 class="page-title">Blog</h1>
    </div>

<div class="wrapper blogoverview">
                	<div class="heading">
    	<h1 class="page-title">Overview - Blog</h1>
    </div>

<div class="content">
    <div class="section">
        <div class="content">
<table class="table" data-year="2014" data-month="8"> <!-- can be bordered, striped, hover, condensed -->
    <thead>
        <tr>
            <th name="month-year" colspan="3"></th>
            <th name="date" class="align-right">Date</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach var="a" items="${articleDAO.listArticle}">
            <tr data-id="2122859">
                <td width="60%"><a href="View?id=${a.id}"> ${a.title}</a></td>
                <td><i class="icon-thumbs-up"> 0</i></td>
                <td><i class="icon-comment"> 0</i></td>
                <td class="align-right"> ${a.published_date}</td>
            </tr>
        </c:forEach>
    </tbody>
</table>
        </div>
    </div>
</div>

                
                </div>
</div>

                
                </div>
            </div>
            <div id="right" class="span3">
                <div class="sidebar">
            <div class="wrapper share-box">
                <style>    .wordwrapfix {
        word-wrap:break-word;
    }
</style>
<div class="heading wordwrapfix">
        <h4>Share this page</h4>
</div>

                <div class="content"><span><ul>
    <li><a id="share-facebook" href="http://us-123fashion.simplesite.com/410906719#"><i class="icon-facebook-sign"></i><span>Share on Facebook</span></a></li>
    <li><a id="share-twitter" href="http://us-123fashion.simplesite.com/410906719#"><i class="icon-twitter-sign"></i><span>Share on Twitter</span></a></li>
    <li><a id="share-google-plus" href="http://us-123fashion.simplesite.com/410906719#"><i class="icon-google-plus-sign"></i><span>Share on Google+</span></a></li>    
</ul></span></div>
            </div>
</div>
            </div>
        </div>        
    </div>
</div>  <!-- the controller has determined which view to be shown in the content -->

            <div class="container-fluid footer-wrapper" id="footer"> <!-- this is the Footer Wrapper -->
    <div class="container">
        <div class="footer-info">
                            <div class="footer-powered-by">
                    Traffic Visit :  ${applicationScope.counter.count}
                </div>
        </div>
            <div class="footer-page-counter" style="display: block;">
</div>
        <div id="css_simplesite_com_fallback" class="hide"></div>
    </div>
</div>

  <!-- this is the Footer content -->
        </div>
        
                        
        <input type="hidden" id="anti-forgery-token" value="vFZIp11QDd7w1cZjYdzwVVw3rTHgQi1lpMMqomvLq/qGfx85dADIn6rd+jb5+yvdIjnIKNejlFu6vxL7J8Np5e7g5yrI36losWXJkOuv169s22+Z/mKVySX+8iBmNTzgEHnWy/7MRLoBekjH3EpgI99d772eCmdJN7eG7tAqc/m4iWFE2sfSH8oY0Q3pJZcuhjM+blA+FzGTkoYvuddklk1q/4A0667VqYWgFZ7hNc8NO4Kw1Txa422/7pYh/UW67W3GdGTPhdbiuy5yZG8PFfcV3pshO8MZJZI4QqpmoSmbtrQpm9WTX4MbCbnQyM7h5NaUS9oN6X4rtQXeQ4JVwDzgCfuolg6kJOxKEjNy3wz2WXZRbIsB2tTp4Wbn2z/LscQdaNLu8/wEWdU3cBKENNmnH1Moai9GJphrPoAdDkRICJpt04BuxdeuliOr+EkKAgaEhxpbxveOkNWp+Bv+KQ==">
        
        
        <script>
    dataLayer = [{"SiteVer":"US","MainOrUser":"UserPage","PreOrFre":"Free","Language":"en","Culture":"en-US","Instrumentation":"ShowPage","Market":"DK"}];
</script>
<!-- Google Tag Manager -->
<noscript>&lt;iframe src="//www.googletagmanager.com/ns.html?id=GTM-2MMH"
height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript>
<script>(function(w,d,s,l,i){{w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
}})(window,document,'script','dataLayer','GTM-2MMH');</script>
<!-- End Google Tag Manager -->

        
        <!-- Remove after blog exp concludes -->
    
<div id="sm2-container" class="movieContainer high_performance" style="z-index: 10000; position: fixed; width: 8px; height: 8px; bottom: 0px; left: 0px; overflow: hidden; visibility: hidden;"><embed name="sm2movie" id="sm2movie" src="/Images/sm297/soundmanager2_flash9.swf" quality="high" allowscriptaccess="always" bgcolor="#ffffff" pluginspage="www.macromedia.com/go/getflashplayer" title="JS/Flash audio component (SoundManager 2)" type="application/x-shockwave-flash" wmode="transparent" haspriority="true"></div><div style="display: none; visibility: hidden;"><script type="text/javascript">var google_conversion_id=1066686464,google_custom_params=window.google_tag_params,google_remarketing_only=!0;</script>
<script type="text/javascript" src="./home_files/conversion.js.download"></script><iframe name="google_conversion_frame" title="Google conversion frame" width="300" height="13" src="./home_files/saved_resource.html" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no"></iframe><iframe name="google_cookie_match_frame" title="Google cookie match frame" width="1" height="1" src="./home_files/pixel.html" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" style="display:none" scrolling="no"></iframe>
<noscript></noscript>
</div></body></html>
