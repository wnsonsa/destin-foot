<?php
// URI:       extension/ezdemo/design/ezdemo/templates/page_header_searchbox.tpl
// Filename:  extension/ezdemo/design/ezdemo/templates/page_header_searchbox.tpl
// Timestamp: 1463821099 (Sat May 21 10:58:19 CEST 2016)
$oldSetArray_35b067e0adaa9bccbeb84c7f0538c1b7 = isset( $setArray ) ? $setArray : array();
$setArray = array();
$tpl->Level++;
if ( $tpl->Level > 40 )
{
$text = $tpl->MaxLevelWarning;$tpl->Level--;
return;
}
$eZTemplateCompilerCodeDate = 1074699607;
if ( !defined( 'EZ_TEMPLATE_COMPILER_COMMON_CODE' ) )
include_once( 'var/ezdemo_site/cache/template/compiled/common.php' );

$text .= '<form class="span4 form-search" method="get" action="/fre/content/search" id="site-wide-search">
    <label class="pull-right">
        <span class="hidden">Recherche</span>
        ';
// if begins
unset( $if_cond );
unset( $if_cond );
$if_cond = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagedata', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagedata'] : null;
$if_cond1 = compiledFetchAttribute( $if_cond, 'is_edit' );
unset( $if_cond );
$if_cond = $if_cond1;
if (! isset( $if_cond ) ) $if_cond = NULL;
while ( is_object( $if_cond ) and method_exists( $if_cond, 'templateValue' ) )
    $if_cond = $if_cond->templateValue();

if ( $if_cond )
{
$text .= '            <input class="search-query span3" type="search" name="SearchText" id="site-wide-search-field" placeholder="Search text" disabled="disabled" />
        ';
}
else
{
$text .= '            <input class="search-query span3" type="search" name="SearchText" id="site-wide-search-field" placeholder="Search text" />
            ';
// if begins
unset( $if_cond );
unset( $if_cond1 );
unset( $if_cond1 );
$if_cond1 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'ui_context', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['ui_context'] : null;
if (! isset( $if_cond1 ) ) $if_cond1 = NULL;
while ( is_object( $if_cond1 ) and method_exists( $if_cond1, 'templateValue' ) )
    $if_cond1 = $if_cond1->templateValue();
$if_cond = ( ( $if_cond1 ) == ( 'browse' ) );
unset( $if_cond1 );
if (! isset( $if_cond ) ) $if_cond = NULL;
while ( is_object( $if_cond ) and method_exists( $if_cond, 'templateValue' ) )
    $if_cond = $if_cond->templateValue();

if ( $if_cond )
{
$text .= '             <input name="Mode" type="hidden" value="browse" />
            ';
}
unset( $if_cond );
// if ends

$text .= '        ';
}
unset( $if_cond );
// if ends

$text .= '    </label>
</form>
';

$setArray = $oldSetArray_35b067e0adaa9bccbeb84c7f0538c1b7;
$tpl->Level--;
?>
