{if is_unset( $load_css_file_list )}
    {def $load_css_file_list = true()}
{/if}

{if $load_css_file_list}
  {ezcss_load( array( 'debug.css',
                      'websitetoolbar.css',
                      ezini( 'StylesheetSettings', 'CSSFileList', 'design.ini' ),
                      ezini( 'StylesheetSettings', 'FrontendCSSFileList', 'design.ini' ) ) )}
{else}
  {ezcss_load( array( 'bootstrap.css',
                      'responsive.css',
                      'debug.css',
                      'websitetoolbar.css' ) )}
{/if}

{if ne(ezini('StylesheetSettings','ClassesCSS','design.ini'), '')}
<link rel="stylesheet" type="text/css" href={ezini('StylesheetSettings','ClassesCSS','design.ini')|ezroot()} />
{/if}
{if ne(ezini('StylesheetSettings','SiteCSS','design.ini'), '')}
<link rel="stylesheet" type="text/css" href={ezini('StylesheetSettings','SiteCSS','design.ini')|ezroot()} />
{/if}
<link rel="stylesheet" type="text/css" href={"stylesheets/print.css"|ezdesign} media="print" />
<!-- GOOGLE FONT-->
<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,700italic,700,500&amp;subset=latin,latin-ext' rel='stylesheet' type='text/css'>
<!-- /GOOGLE FONT-->
<style type="text/css">
    {literal}
    body {
        padding-top: 0px;
        padding-bottom: 40px;
        padding-top: 0px;
        padding-bottom: 0px;
        font-family: 'Roboto', sans-serif;

    }

    h1,h2,h3,h4,h5,h6{
        font-weight:200;
    }
    .navbar-inverse .navbar-inner{
        -webkit-border-radius: 0px;
        -moz-border-radius: 0px;
        border-radius: 0px;
        background:#282828;
        border:none;
    }

    .page-header{
        border:none;
        padding: 10px 0px 0px;
        margin: 0px 0 0px;
    }
    .brand{

        margin-left:20px;
        font-weight:700;
    }

    .thumbnail{
        border:none;
        padding:0px;
        -webkit-border-radius: 0px;
        -moz-border-radius: 0px;
        border-radius: 0px;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        margin-bottom:20px;
    }
    .thumbnail img{
        min-width:100%;
        height:auto;
    }

    .well {
        min-height: 20px;
        padding: 19px;
        margin-bottom: 20px;
        -webkit-border-radius: 0px;
        -moz-border-radius: 0px;
        border-radius: 0px;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }


    .tab-content .tab-pane{
        /*max-height:600px;*/
        position:relative;
        overflow:auto;
    }



    .fixed-top{
        position:fixed;
        top:0px;
        bottom:0px;
        display:inline-block;
        max-width:360px;
        z-index:1030;
    }


    footer{
        padding-top:40px;
        margin-top:40px;
        border-top:1px solid #dedede;
    }
    .related-projects{
        padding-top:40px;
        margin-top:40px;

    }

    /*************** @media ******************/
    @media (max-width: 940px){
        .brand {
            display:block;
            text-align:center;
            font-size:26px;
        }
    }

    @media (max-width: 1200px) and (min-width: 940px){
        .fixed-top{
            max-width:300px;
        }


    }

    @media (max-width: 940px) and (min-width: 768px){
        .fixed-top{
            max-width:225px;

        }



    }

    {/literal}

</style>
{*<link href="stylesheet/assets/css/font-awesome.min.css" rel="stylesheet">*}
<!-- USE PREFIX fa- e.g (<i class="fa-icon-home"></i> -->

<!--[if lt IE 7]>
<!--<link href="stylesheet/assets/css/font-awesome-ie7.min.css" rel="stylesheet">-->
<![endif]-->
<!-- Fav and touch icons -->


<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js" type="text/javascript"></script>
<![endif]-->
<!-- Le fav and touch icons -->
<link rel="shortcut icon" href="assets/ico/favicon.ico">
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
<link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">