$(function(){ if (typeof(CKEDITOR) == 'object') {
CKEDITOR.on("instanceReady", function(event){if ($("#vB_Editor_QR_editor").length){$("#vB_Editor_QR_editor").dropzone();} else if ($("#vB_Editor_001_editor").length){$("#vB_Editor_001_editor").dropzone();}});};
/* Follow*/
$(".follow_link").click(function(){var o=$(this);return o.hasClass("disabled")||(action=o.attr("data-action"),followee=o.attr("data-followee"),o.addClass("disabled"),o.html("Procesando..."),$.post("/papi/follows/"+followee+"/"+action).done(function(a){"follow"==action&&"1"==a||"unfollow"==action&&"1"!=a?(o.html("Dejar de seguir"),o.attr("data-action","unfollow")):(o.html("Seguir"),o.attr("data-action","follow")),o.removeClass("disabled")})),!1});
/* Share */
$(".twShare").click(function(){var t=screen.height/2-175,e=screen.width/2-260;return window.open("https://twitter.com/intent/tweet?text="+$("#breadcrumb .lastnavbit span").html().trim()+"&url="+encodeURIComponent($(this).attr("href")),"sharer","top="+t+",left="+e+",toolbar=0,status=0,width=520,height=350"),!1}),$(".fbShare").click(function(){var t=screen.height/2-175,e=screen.width/2-260;return window.open("https://www.facebook.com/sharer.php?s=100&p[title]="+$("#breadcrumb .lastnavbit span").html().trim()+"&p[summary]="+$("#breadcrumb .lastnavbit span").html().trim()+"&p[url]="+encodeURIComponent($(this).attr("href")),"sharer","top="+t+",left="+e+",toolbar=0,status=0,width=520,height=350"),!1}),$(".gpShare").click(function(){var t=screen.height/2-175,e=screen.width/2-260;return window.open("https://plus.google.com/share?url="+encodeURIComponent($(this).attr("href")),"sharer","top="+t+",left="+e+",toolbar=0,status=0,width=520,height=350"),!1}),$(".ptShare").click(function(){var t=screen.height/2-175,e=screen.width/2-260,r="";return $(".postlist .postbody img").size()>0&&$(".postlist .postbody img").each(function(){$(this).attr("src").toLowerCase().indexOf("https://foros.3dgames.com.ar")<0&&0!=$(this).attr("src").toLowerCase().indexOf("/")&&(r=encodeURIComponent($(this).attr("src")))}),""==r&&(r="https://foros.3dgames.com.ar/images/logo_3dg.png"),window.open("https://pinterest.com/pin/create/bookmarklet/?&media="+r+"&description="+$("#breadcrumb .lastnavbit span").html().trim()+"&is_video=false&url="+$(this).attr("href"),"sharer","top="+t+",left="+e+",toolbar=0,status=0,width=520,height=350"),!1});
// Back to top button
return $(window).scroll(function() {
  return $(window).scrollTop() > 200 ? $("#back-to-top").addClass("show") : $("#back-to-top").removeClass("show")
}), $("#back-to-top").click(function() {
  return $("html,body").animate({
    scrollTop: "0"
  })
});
});
