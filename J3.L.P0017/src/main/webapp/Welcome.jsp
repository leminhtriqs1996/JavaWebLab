<%-- 
    Document   : Welcome
    Created on : Oct 28, 2019, 9:54:59 PM
    Author     : aaa
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="articleDAO" class="dao.ArticleDAOImpl"/>
<jsp:useBean id="courseDAO" class="dao.CourseDAOImpl"/>
<!DOCTYPE html>
<!DOCTYPE html>
<!-- saved from url=(0038)http://www.simplesite.com/us-123health -->
<html lang="en-US" class=""><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Welcome </title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="Aromatherapy - Massage - http://www.simplesite.com/us-123health/">
        <link rel="stylesheet" type="text/css" href="./Welcome_files/8472132.design.v26182.css">
<link rel="canonical" href="http://www.simplesite.com/us-123health/">
                <link rel="shortcut icon" href="data:image/x-icon;,">
<link rel="stylesheet" type="text/css" href="./Welcome_files/css">
        <script type="text/javascript" async="" src="./Welcome_files/analytics.js.download"></script><script async="" src="./Welcome_files/gtm.js.download"></script><script type="text/javascript" src="./Welcome_files/FrontendAppLocalePage.aspx"></script>
                <script type="text/javascript" src="./Welcome_files/frontendApp.min.js.download"></script>
        <script type="text/javascript">if(typeof window.jQuery=="undefined"){(function(){var a=document.createElement("script");a.type="text/javascript";a.src="/c/js/version3/frontendApp/init/frontendApp.min.js?_v=c3745b49b3583731aea941058c4b63a8";document.getElementsByTagName('head')[0].appendChild(a);})();}</script>

                <script type="text/javascript">var css_simplesite_com_fallback_element = document.getElementById('css_simplesite_com_fallback');
if(typeof css_simplesite_com_fallback_element !== 'undefined' && css_simplesite_com_fallback_element !== null){
var isVisible = css_simplesite_com_fallback_element.offsetParent !== null
if(isVisible){
var head = document.head, link = document.createElement('link');

link.type = 'text/css';
link.rel = 'stylesheet';
link.href = '{/d/designs/8472132.design.v26182.css}';

head.appendChild(link);
}
}</script>
    <style type="text/css">.fancybox-margin{margin-right:17px;}</style></head>
    <body data-pid="118896506" data-iid="">


        
        
        <div class="container-fluid site-wrapper"> <!-- this is the Sheet -->
            <div class="container-fluid header-wrapper " id="header"> <!-- this is the Header Wrapper -->
    <div class="container">
<div class="title-wrapper">
	<div class="title-wrapper-inner">
	    <a rel="nofollow" class="logo " href="Welcome.jsp">
	    </a>
	    <div class="title ">
	        Aromatherapy - Massage
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
    <a rel="nofollow" href="Welcome.jsp">Welcome</a>
</li><li class="  " style="">
    <a rel="nofollow" href="Therapy_and_Massage.jsp">Therapy and Massage</a>
</li><li class="  " style="">
    <a rel="nofollow" href="PriceList.jsp">Price List</a>
</li><li class="  " style="">
    <a rel="nofollow" href="Employees.jsp">Employees</a>
</li><li class="  " style="">
    <a rel="nofollow" href="ContactUs.jsp">Contact us</a>
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
                <div class="wrapper ">
                    <div class="content">
<div class="section article">
    <div class="content">
        <div class="img-simple span12 ">
    <div class="image">
            <a rel="nofollow" data-ss="imagemodal" data-href="./Welcome_files/i283445314524568867._szw1280h1280_.jpg"><img src="./Welcome_files/i283445314524568867._szw1280h1280_.jpg"></a>
    </div>
    </div>

    </div>
</div>
<div class="section">
    <div class="content">
        <ul class="thumbnails column-article-section">
            <c:forEach begin="0" end="2" var="a" items="${articleDAO.listArticleSortByDate}">
                <li class="span4">
                    <div class="img-simple span12 ">
    <div class="image">
            <a rel="nofollow" data-ss="imagemodal" data-href="./image/${a.image}"><img src="./image/${a.image}"></a>
    </div>
    </div>

                    <h4>
        <a rel="nofollow" href="Therapy_and_Massage.jsp"> ${a.title} </a>
</h4>

                     <p> ${a.content} </p>
                </li>
            </c:forEach>
                
        </ul>
    </div>
</div>
<div class="section news">
    <style>    .wordwrapfix {
        word-wrap:break-word;
    }
</style>
<div class="heading wordwrapfix">
        <h3>Courses</h3>
</div>

    <div class="content">
        <dl class="dl-horizontal">
            <c:forEach var="c" items="${courseDAO.listCourse}" >
                <dt><span class="date-text"> </span> ${c.date} </dt>
            <dd>
                <h4>
                    ${c.name}
                </h4>

                 <p> ${c.description}</p>
            </dd>
            </c:forEach>
            
        </dl>
    </div>
</div>
<div class="section article">
    <style>    .wordwrapfix {
        word-wrap:break-word;
    }
</style>
<div class="heading wordwrapfix">
        <h3>Make an appointment</h3>
</div>

    <div class="content">
<p>Tel: 123-123-1234</p> <p><span data-mce-mark="1">Email: health@123health.com&nbsp;</span></p> <p>We are committed to your well-being. If you have any comments, questions or concerns feel free to contact us</p>    </div>
</div>
<div class="section signature">
	<div class="content">
        <div class="img-simple span4 signature-image">
    <div class="image">
            <a rel="nofollow" data-ss="imagemodal" data-href="http://cdn.simplesite.com/i/ef/3d/283445307041725935/i283445314527777596._szw1280h1280_.jpg"><img src="./Welcome_files/i283445314527777596._szw480h1280_.jpg"></a>
    </div>
    </div>

        <div class="span8 signature-text">
    		 <p>Kind regards</p>
	        <div class="signature-sign" style="font-family: &#39;Pacifico&#39;,serif;">
	            Charlotte Robert
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
    <li><a id="share-facebook" href="http://www.simplesite.com/us-123health#"><i class="icon-facebook-sign"></i><span>Share on Facebook</span></a></li>
    <li><a id="share-twitter" href="http://www.simplesite.com/us-123health#"><i class="icon-twitter-sign"></i><span>Share on Twitter</span></a></li>
    <li><a id="share-google-plus" href="http://www.simplesite.com/us-123health#"><i class="icon-google-plus-sign"></i><span>Share on Google+</span></a></li>    
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
        
                        
        <input type="hidden" id="anti-forgery-token" value="vFZIp11QDd7w1cZjYdzwVVw3rTHgQi1lpMMqomvLq/qGfx85dADIn6rd+jb5+yvdIjnIKNejlFu6vxL7J8Np5e7g5yrI36losWXJkOuv169s22+Z/mKVySX+8iBmNTzgEHnWy/7MRLoBekjH3EpgI99d772eCmdJN7eG7tAqc/m4iWFE2sfSH8oY0Q3pJZcuhjM+blA+FzGTkoYvuddklk1q/4A0667VqYWgFZ7hNc8NO4Kw1Txa422/7pYh/UW67W3GdGTPhdbiuy5yZG8PFfcV3pshO8MZJZI4QqpmoSmbtrQpm9WTX4MbCbnQyM7h5NaUS9oN6X4rtQXeQ4JVwDzgCfuolg6kJOxKEjNy3wz2WXZRbIsB2tTp4Wbn2z/Ln9JWaw1KOYEERYwJ6vPWVaRgC601/8mXvOFAA/mWkb74c7/7dNZnzEC3wG+uUltU5QUKyYPoSFM3dqAQ14muXQ==">
        
        
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
    
<div id="sm2-container" class="movieContainer high_performance  high_performance" style="z-index: 10000; position: fixed; width: 8px; height: 8px; bottom: 0px; left: 0px; overflow: hidden; visibility: hidden;"></div><div style="display: none; visibility: hidden;"><script type="text/javascript">var google_conversion_id=1066686464,google_custom_params=window.google_tag_params,google_remarketing_only=!0;</script>
<script type="text/javascript" src="./Welcome_files/conversion.js.download"></script><iframe name="google_conversion_frame" title="Google conversion frame" width="300" height="13" src="./Welcome_files/saved_resource.html" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no"></iframe>
<noscript></noscript>
</div></body></html>
