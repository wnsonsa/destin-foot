<?php
// URI:       design:pagelayout.tpl
// Filename:  extension/ezdemo/design/ezdemo/templates/pagelayout.tpl
// Timestamp: 1463821099 (Sat May 21 10:58:19 CEST 2016)
$oldSetArray_13e090a3271369dcbb22f652f2140517 = isset( $setArray ) ? $setArray : array();
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

$text .= '<!DOCTYPE html>
<!--[if lt IE 9 ]><html class="unsupported-ie ie" lang="';
unset( $var );
unset( $var1 );
unset( $var1 );
$var1 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'site', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['site'] : null;
$var2 = compiledFetchAttribute( $var1, 'http_equiv' );
unset( $var1 );
$var1 = $var2;
$var2 = compiledFetchAttribute( $var1, 'Content-language' );
unset( $var1 );
$var1 = $var2;
if (! isset( $var1 ) ) $var1 = NULL;
while ( is_object( $var1 ) and method_exists( $var1, 'templateValue' ) )
    $var1 = $var1->templateValue();
while ( is_object( $var1 ) and method_exists( $var1, 'templateValue' ) )
    $var1 = $var1->templateValue();
$var = htmlspecialchars( $var1 );
unset( $var1 );
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
$text .= $var;
unset( $var );

$text .= '"><![endif]-->
<!--[if IE 9 ]><html class="ie ie9" lang="';
unset( $var );
unset( $var1 );
unset( $var1 );
$var1 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'site', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['site'] : null;
$var2 = compiledFetchAttribute( $var1, 'http_equiv' );
unset( $var1 );
$var1 = $var2;
$var2 = compiledFetchAttribute( $var1, 'Content-language' );
unset( $var1 );
$var1 = $var2;
if (! isset( $var1 ) ) $var1 = NULL;
while ( is_object( $var1 ) and method_exists( $var1, 'templateValue' ) )
    $var1 = $var1->templateValue();
while ( is_object( $var1 ) and method_exists( $var1, 'templateValue' ) )
    $var1 = $var1->templateValue();
$var = htmlspecialchars( $var1 );
unset( $var1 );
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
$text .= $var;
unset( $var );

$text .= '"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html lang="';
unset( $var );
unset( $var1 );
unset( $var1 );
$var1 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'site', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['site'] : null;
$var2 = compiledFetchAttribute( $var1, 'http_equiv' );
unset( $var1 );
$var1 = $var2;
$var2 = compiledFetchAttribute( $var1, 'Content-language' );
unset( $var1 );
$var1 = $var2;
if (! isset( $var1 ) ) $var1 = NULL;
while ( is_object( $var1 ) and method_exists( $var1, 'templateValue' ) )
    $var1 = $var1->templateValue();
while ( is_object( $var1 ) and method_exists( $var1, 'templateValue' ) )
    $var1 = $var1->templateValue();
$var = htmlspecialchars( $var1 );
unset( $var1 );
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
$text .= $var;
unset( $var );

$text .= '"><!--<![endif]-->
<head>';
// def $basket_is_empty
unset( $var );
unset( $var1 );
unset( $var1 );
$var1 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'current_user', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['current_user'] : null;
$var2 = compiledFetchAttribute( $var1, 'is_logged_in' );
unset( $var1 );
$var1 = $var2;
if (! isset( $var1 ) ) $var1 = NULL;
while ( is_object( $var1 ) and method_exists( $var1, 'templateValue' ) )
    $var1 = $var1->templateValue();
while ( is_object( $var1 ) and method_exists( $var1, 'templateValue' ) )
    $var1 = $var1->templateValue();
if ( $var1 )
{
    unset( $var2 );
$var2 = call_user_func_array( array( new eZShopFunctionCollection(), 'fetchBasket' ),
  array(  ) );
$var2 = isset( $var2['result'] ) ? $var2['result'] : null;
$var3 = compiledFetchAttribute( $var2, "is_empty" );
unset( $var2 );
$var2 = $var3;
if (! isset( $var2 ) ) $var2 = NULL;
while ( is_object( $var2 ) and method_exists( $var2, 'templateValue' ) )
    $var2 = $var2->templateValue();
while ( is_object( $var2 ) and method_exists( $var2, 'templateValue' ) )
    $var2 = $var2->templateValue();

    $var = $var2;
}
else
{
    
    $var = 1;
}
unset( $var1, $var2 );
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
if ( $tpl->hasVariable( 'basket_is_empty', $rootNamespace ) )
{
    $tpl->warning( 'def', "Variable 'basket_is_empty' is already defined.", array (
  0 => 
  array (
    0 => 6,
    1 => 0,
    2 => 333,
  ),
  1 => 
  array (
    0 => 7,
    1 => 142,
    2 => 570,
  ),
  2 => 'extension/ezdemo/design/ezdemo/templates/pagelayout.tpl',
) );
    $tpl->setVariable( 'basket_is_empty', $var, $rootNamespace );
}
else
{
    $tpl->setLocalVariable( 'basket_is_empty', $var, $rootNamespace );
}

// def $user_hash
unset( $var );
unset( $var1 );
unset( $var2 );
unset( $var2 );
$var2 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'current_user', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['current_user'] : null;
$var3 = compiledFetchAttribute( $var2, 'role_id_list' );
unset( $var2 );
$var2 = $var3;
if (! isset( $var2 ) ) $var2 = NULL;
while ( is_object( $var2 ) and method_exists( $var2, 'templateValue' ) )
    $var2 = $var2->templateValue();
while ( is_object( $var2 ) and method_exists( $var2, 'templateValue' ) )
    $var2 = $var2->templateValue();
$var1 = implode( ",", $var2 );unset( $var2 );
if (! isset( $var1 ) ) $var1 = NULL;
while ( is_object( $var1 ) and method_exists( $var1, 'templateValue' ) )
    $var1 = $var1->templateValue();
unset( $var3 );
unset( $var4 );
unset( $var4 );
$var4 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'current_user', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['current_user'] : null;
$var5 = compiledFetchAttribute( $var4, 'limited_assignment_value_list' );
unset( $var4 );
$var4 = $var5;
if (! isset( $var4 ) ) $var4 = NULL;
while ( is_object( $var4 ) and method_exists( $var4, 'templateValue' ) )
    $var4 = $var4->templateValue();
while ( is_object( $var4 ) and method_exists( $var4, 'templateValue' ) )
    $var4 = $var4->templateValue();
$var3 = implode( ",", $var4 );unset( $var4 );
if (! isset( $var3 ) ) $var3 = NULL;
while ( is_object( $var3 ) and method_exists( $var3, 'templateValue' ) )
    $var3 = $var3->templateValue();
$var = ( $var1 . ',' . $var3 );
unset( $var1, $var3 );
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
if ( $tpl->hasVariable( 'user_hash', $rootNamespace ) )
{
    $tpl->warning( 'def', "Variable 'user_hash' is already defined.", array (
  0 => 
  array (
    0 => 6,
    1 => 0,
    2 => 333,
  ),
  1 => 
  array (
    0 => 7,
    1 => 142,
    2 => 570,
  ),
  2 => 'extension/ezdemo/design/ezdemo/templates/pagelayout.tpl',
) );
    $tpl->setVariable( 'user_hash', $var, $rootNamespace );
}
else
{
    $tpl->setLocalVariable( 'user_hash', $var, $rootNamespace );
}

$oldRestoreIncludeArray_484f00d6f05eea0a478820e5e9bf1cc0 = isset( $restoreIncludeArray ) ? $restoreIncludeArray : array();
$restoreIncludeArray = array();

if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( "design" );
    $dKeys = $resH->keys();
}

$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/page_head_displaystyles-5c61861cfa0299a4bdf1c9c623781a64.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'design/standard/templates/page_head_displaystyles.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/page_head_displaystyles-5c61861cfa0299a4bdf1c9c623781a64.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'design/standard/templates/page_head_displaystyles.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

foreach ( $restoreIncludeArray as $element )
{
    if ( $element[2] === 'unset' )
    {
        unset( $vars[$element[0]][$element[1]] );
        continue;
    }
    $vars[$element[0]][$element[1]] = $element[2];
}
$restoreIncludeArray = $oldRestoreIncludeArray_484f00d6f05eea0a478820e5e9bf1cc0;

// if begins
unset( $if_cond );
unset( $if_cond1 );
unset( $if_cond2 );
unset( $if_cond2 );
$if_cond2 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'extra_cache_key', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['extra_cache_key'] : null;
if (! isset( $if_cond2 ) ) $if_cond2 = NULL;
while ( is_object( $if_cond2 ) and method_exists( $if_cond2, 'templateValue' ) )
    $if_cond2 = $if_cond2->templateValue();
$if_cond1 = isset( $if_cond2 );unset( $if_cond2 );
if (! isset( $if_cond1 ) ) $if_cond1 = NULL;
while ( is_object( $if_cond1 ) and method_exists( $if_cond1, 'templateValue' ) )
    $if_cond1 = $if_cond1->templateValue();
$if_cond = !( $if_cond1 );
unset( $if_cond1 );
if (! isset( $if_cond ) ) $if_cond = NULL;
while ( is_object( $if_cond ) and method_exists( $if_cond, 'templateValue' ) )
    $if_cond = $if_cond->templateValue();

if ( $if_cond )
{
$text .= '    ';
// def $extra_cache_key
if ( $tpl->hasVariable( 'extra_cache_key', $rootNamespace ) )
{
    $tpl->warning( 'def', "Variable 'extra_cache_key' is already defined.", array (
  0 => 
  array (
    0 => 12,
    1 => 4,
    2 => 666,
  ),
  1 => 
  array (
    0 => 12,
    1 => 29,
    2 => 691,
  ),
  2 => 'extension/ezdemo/design/ezdemo/templates/pagelayout.tpl',
) );
    $tpl->setVariable( 'extra_cache_key', '', $rootNamespace );
}
else
{
    $tpl->setLocalVariable( 'extra_cache_key', '', $rootNamespace );
}

}
unset( $if_cond );
// if ends

// def $pagedata
unset( $var );
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
$varData = array( 'value' => $var );
$tpl->processOperator( 'ezpagedata',
                       array (
),
                       $rootNamespace, $currentNamespace, $varData, false, false );
$var = $varData['value'];
unset( $varData );
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
if ( $tpl->hasVariable( 'pagedata', $rootNamespace ) )
{
    $tpl->warning( 'def', "Variable 'pagedata' is already defined.", array (
  0 => 
  array (
    0 => 15,
    1 => 0,
    2 => 701,
  ),
  1 => 
  array (
    0 => 17,
    1 => 53,
    2 => 844,
  ),
  2 => 'extension/ezdemo/design/ezdemo/templates/pagelayout.tpl',
) );
    $tpl->setVariable( 'pagedata', $var, $rootNamespace );
}
else
{
    $tpl->setLocalVariable( 'pagedata', $var, $rootNamespace );
}

// def $inner_column_size
unset( $var );
unset( $var );
$var = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagedata', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagedata'] : null;
$var1 = compiledFetchAttribute( $var, 'inner_column_size' );
unset( $var );
$var = $var1;
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
if ( $tpl->hasVariable( 'inner_column_size', $rootNamespace ) )
{
    $tpl->warning( 'def', "Variable 'inner_column_size' is already defined.", array (
  0 => 
  array (
    0 => 15,
    1 => 0,
    2 => 701,
  ),
  1 => 
  array (
    0 => 17,
    1 => 53,
    2 => 844,
  ),
  2 => 'extension/ezdemo/design/ezdemo/templates/pagelayout.tpl',
) );
    $tpl->setVariable( 'inner_column_size', $var, $rootNamespace );
}
else
{
    $tpl->setLocalVariable( 'inner_column_size', $var, $rootNamespace );
}

// def $outer_column_size
unset( $var );
unset( $var );
$var = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagedata', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagedata'] : null;
$var1 = compiledFetchAttribute( $var, 'outer_column_size' );
unset( $var );
$var = $var1;
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
if ( $tpl->hasVariable( 'outer_column_size', $rootNamespace ) )
{
    $tpl->warning( 'def', "Variable 'outer_column_size' is already defined.", array (
  0 => 
  array (
    0 => 15,
    1 => 0,
    2 => 701,
  ),
  1 => 
  array (
    0 => 17,
    1 => 53,
    2 => 844,
  ),
  2 => 'extension/ezdemo/design/ezdemo/templates/pagelayout.tpl',
) );
    $tpl->setVariable( 'outer_column_size', $var, $rootNamespace );
}
else
{
    $tpl->setLocalVariable( 'outer_column_size', $var, $rootNamespace );
}

unset( $cacheKeys );
unset( $cacheKeys1 );
unset( $cacheKeys1 );
$cacheKeys1 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'module_result', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['module_result'] : null;
$cacheKeys2 = compiledFetchAttribute( $cacheKeys1, 'uri' );
unset( $cacheKeys1 );
$cacheKeys1 = $cacheKeys2;
if (! isset( $cacheKeys1 ) ) $cacheKeys1 = NULL;
while ( is_object( $cacheKeys1 ) and method_exists( $cacheKeys1, 'templateValue' ) )
    $cacheKeys1 = $cacheKeys1->templateValue();
while ( is_object( $cacheKeys1 ) and method_exists( $cacheKeys1, 'templateValue' ) )
    $cacheKeys1 = $cacheKeys1->templateValue();
unset( $cacheKeys2 );
unset( $cacheKeys2 );
$cacheKeys2 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'basket_is_empty', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['basket_is_empty'] : null;
if (! isset( $cacheKeys2 ) ) $cacheKeys2 = NULL;
while ( is_object( $cacheKeys2 ) and method_exists( $cacheKeys2, 'templateValue' ) )
    $cacheKeys2 = $cacheKeys2->templateValue();
while ( is_object( $cacheKeys2 ) and method_exists( $cacheKeys2, 'templateValue' ) )
    $cacheKeys2 = $cacheKeys2->templateValue();
unset( $cacheKeys3 );
unset( $cacheKeys3 );
$cacheKeys3 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'current_user', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['current_user'] : null;
$cacheKeys4 = compiledFetchAttribute( $cacheKeys3, 'contentobject_id' );
unset( $cacheKeys3 );
$cacheKeys3 = $cacheKeys4;
if (! isset( $cacheKeys3 ) ) $cacheKeys3 = NULL;
while ( is_object( $cacheKeys3 ) and method_exists( $cacheKeys3, 'templateValue' ) )
    $cacheKeys3 = $cacheKeys3->templateValue();
while ( is_object( $cacheKeys3 ) and method_exists( $cacheKeys3, 'templateValue' ) )
    $cacheKeys3 = $cacheKeys3->templateValue();
unset( $cacheKeys4 );
unset( $cacheKeys4 );
$cacheKeys4 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'extra_cache_key', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['extra_cache_key'] : null;
if (! isset( $cacheKeys4 ) ) $cacheKeys4 = NULL;
while ( is_object( $cacheKeys4 ) and method_exists( $cacheKeys4, 'templateValue' ) )
    $cacheKeys4 = $cacheKeys4->templateValue();
while ( is_object( $cacheKeys4 ) and method_exists( $cacheKeys4, 'templateValue' ) )
    $cacheKeys4 = $cacheKeys4->templateValue();
$cacheKeys = array( $cacheKeys1, $cacheKeys2, $cacheKeys3, $cacheKeys4 );unset( $cacheKeys1, $cacheKeys2, $cacheKeys3, $cacheKeys4 );
if (! isset( $cacheKeys ) ) $cacheKeys = NULL;
while ( is_object( $cacheKeys ) and method_exists( $cacheKeys, 'templateValue' ) )
    $cacheKeys = $cacheKeys->templateValue();

$subtreeExpiry = NULL;
$cacheKeys = array( $cacheKeys, "19_0_19_112_extension/ezdemo/design/ezdemo/templates/pagelayout.tpl", "fre" );

list($cacheHandler_78fe9ca7c1039bac2f325180035b3f27, $contentData) =
  eZTemplateCacheBlock::retrieve( $cacheKeys, $subtreeExpiry, 7200, true );
if ( !( $contentData instanceof eZClusterFileFailure ) )
{

$text .= $contentData;
    unset( $contentData );
}
else
{
    unset( $contentData );
if ( !isset( $textStack ) )
    $textStack = array();
$textStack[] = $text;
$text = '';
// def $pagestyle
unset( $var );
unset( $var );
$var = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagedata', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagedata'] : null;
$var1 = compiledFetchAttribute( $var, 'css_classes' );
unset( $var );
$var = $var1;
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
if ( $tpl->hasVariable( 'pagestyle', $rootNamespace ) )
{
    $tpl->warning( 'def', "Variable 'pagestyle' is already defined.", array (
  0 => 
  array (
    0 => 20,
    1 => 0,
    2 => 963,
  ),
  1 => 
  array (
    0 => 22,
    1 => 42,
    2 => 1115,
  ),
  2 => 'extension/ezdemo/design/ezdemo/templates/pagelayout.tpl',
) );
    $tpl->setVariable( 'pagestyle', $var, $rootNamespace );
}
else
{
    $tpl->setLocalVariable( 'pagestyle', $var, $rootNamespace );
}

// def $locales
unset( $var );
$var = call_user_func_array( array( new eZContentFunctionCollection(), 'fetchTranslationList' ),
  array(  ) );
$var = isset( $var['result'] ) ? $var['result'] : null;
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
if ( $tpl->hasVariable( 'locales', $rootNamespace ) )
{
    $tpl->warning( 'def', "Variable 'locales' is already defined.", array (
  0 => 
  array (
    0 => 20,
    1 => 0,
    2 => 963,
  ),
  1 => 
  array (
    0 => 22,
    1 => 42,
    2 => 1115,
  ),
  2 => 'extension/ezdemo/design/ezdemo/templates/pagelayout.tpl',
) );
    $tpl->setVariable( 'locales', $var, $rootNamespace );
}
else
{
    $tpl->setLocalVariable( 'locales', $var, $rootNamespace );
}

// def $current_node_id
unset( $var );
unset( $var );
$var = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagedata', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagedata'] : null;
$var1 = compiledFetchAttribute( $var, 'node_id' );
unset( $var );
$var = $var1;
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
if ( $tpl->hasVariable( 'current_node_id', $rootNamespace ) )
{
    $tpl->warning( 'def', "Variable 'current_node_id' is already defined.", array (
  0 => 
  array (
    0 => 20,
    1 => 0,
    2 => 963,
  ),
  1 => 
  array (
    0 => 22,
    1 => 42,
    2 => 1115,
  ),
  2 => 'extension/ezdemo/design/ezdemo/templates/pagelayout.tpl',
) );
    $tpl->setVariable( 'current_node_id', $var, $rootNamespace );
}
else
{
    $tpl->setLocalVariable( 'current_node_id', $var, $rootNamespace );
}

$text .= '
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
';
$oldRestoreIncludeArray_c09116dae32dd4b4f23b3ef68ec800ed = isset( $restoreIncludeArray ) ? $restoreIncludeArray : array();
$restoreIncludeArray = array();

if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( "design" );
    $dKeys = $resH->keys();
}

$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/page_head-aa12706244bb40daf25dde4be0088f5a.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/templates/page_head.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/page_head-aa12706244bb40daf25dde4be0088f5a.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/templates/page_head.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

foreach ( $restoreIncludeArray as $element )
{
    if ( $element[2] === 'unset' )
    {
        unset( $vars[$element[0]][$element[1]] );
        continue;
    }
    $vars[$element[0]][$element[1]] = $element[2];
}
$restoreIncludeArray = $oldRestoreIncludeArray_c09116dae32dd4b4f23b3ef68ec800ed;

$oldRestoreIncludeArray_b42a24778fc549e8394a1f3c3aad3c08 = isset( $restoreIncludeArray ) ? $restoreIncludeArray : array();
$restoreIncludeArray = array();

if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( "design" );
    $dKeys = $resH->keys();
}

$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/page_head_style-bb3a40730c98467d582bc3ee6a730602.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/templates/page_head_style.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/page_head_style-bb3a40730c98467d582bc3ee6a730602.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/templates/page_head_style.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

foreach ( $restoreIncludeArray as $element )
{
    if ( $element[2] === 'unset' )
    {
        unset( $vars[$element[0]][$element[1]] );
        continue;
    }
    $vars[$element[0]][$element[1]] = $element[2];
}
$restoreIncludeArray = $oldRestoreIncludeArray_b42a24778fc549e8394a1f3c3aad3c08;

$oldRestoreIncludeArray_bf45bada90d130b70c257d338b1438be = isset( $restoreIncludeArray ) ? $restoreIncludeArray : array();
$restoreIncludeArray = array();

if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( "design" );
    $dKeys = $resH->keys();
}

$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/page_head_script-1ab21d547856c5feeb7f078a08b0d1f5.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/templates/page_head_script.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/page_head_script-1ab21d547856c5feeb7f078a08b0d1f5.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/templates/page_head_script.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

foreach ( $restoreIncludeArray as $element )
{
    if ( $element[2] === 'unset' )
    {
        unset( $vars[$element[0]][$element[1]] );
        continue;
    }
    $vars[$element[0]][$element[1]] = $element[2];
}
$restoreIncludeArray = $oldRestoreIncludeArray_bf45bada90d130b70c257d338b1438be;

$text .= '
</head>
<body>
<!-- Complete page area: START -->

<div id="page" class="';
unset( $var );
unset( $var );
$var = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagestyle', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagestyle'] : null;
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
$text .= ( is_object( $var ) ? compiledFetchText( $tpl, $rootNamespace, $currentNamespace, false, $var ) : $var );
unset( $var );

$text .= '">

    ';
// if begins
unset( $if_cond );
unset( $if_cond1 );
unset( $if_cond2 );
unset( $if_cond2 );
$if_cond2 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagedata', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagedata'] : null;
$if_cond3 = compiledFetchAttribute( $if_cond2, 'persistent_variable' );
unset( $if_cond2 );
$if_cond2 = $if_cond3;
$if_cond3 = compiledFetchAttribute( $if_cond2, 'extra_template_list' );
unset( $if_cond2 );
$if_cond2 = $if_cond3;
if (! isset( $if_cond2 ) ) $if_cond2 = NULL;
while ( is_object( $if_cond2 ) and method_exists( $if_cond2, 'templateValue' ) )
    $if_cond2 = $if_cond2->templateValue();
$if_cond1 = isset( $if_cond2 );unset( $if_cond2 );
if (! isset( $if_cond1 ) ) $if_cond1 = NULL;
while ( is_object( $if_cond1 ) and method_exists( $if_cond1, 'templateValue' ) )
    $if_cond1 = $if_cond1->templateValue();
unset( $if_cond2 );
unset( $if_cond2 );
$if_cond2 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagedata', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagedata'] : null;
$if_cond3 = compiledFetchAttribute( $if_cond2, 'persistent_variable' );
unset( $if_cond2 );
$if_cond2 = $if_cond3;
$if_cond3 = compiledFetchAttribute( $if_cond2, 'extra_template_list' );
unset( $if_cond2 );
$if_cond2 = $if_cond3;
if (! isset( $if_cond2 ) ) $if_cond2 = NULL;
while ( is_object( $if_cond2 ) and method_exists( $if_cond2, 'templateValue' ) )
    $if_cond2 = $if_cond2->templateValue();
$if_cond2Data = array( 'value' => $if_cond2 );
$tpl->processOperator( 'count',
                       array (
),
                       $rootNamespace, $currentNamespace, $if_cond2Data, false, false );
$if_cond2 = $if_cond2Data['value'];
unset( $if_cond2Data );
if (! isset( $if_cond2 ) ) $if_cond2 = NULL;
while ( is_object( $if_cond2 ) and method_exists( $if_cond2, 'templateValue' ) )
    $if_cond2 = $if_cond2->templateValue();
if ( !$if_cond1 )
    $if_cond = false;
else if ( !$if_cond2 )
    $if_cond = false;
else
    $if_cond = $if_cond2;
unset( $if_cond1, $if_cond2 );
if (! isset( $if_cond ) ) $if_cond = NULL;
while ( is_object( $if_cond ) and method_exists( $if_cond, 'templateValue' ) )
    $if_cond = $if_cond->templateValue();

if ( $if_cond )
{
$text .= '    ';
// foreach begins
$skipDelimiter = true;
if ( !isset( $fe_variable_stack_5f22032aaab3ba673c0479eb337986d2_11 ) ) $fe_variable_stack_5f22032aaab3ba673c0479eb337986d2_11 = array();
$fe_variable_stack_5f22032aaab3ba673c0479eb337986d2_11[] = compact( 'fe_array_5f22032aaab3ba673c0479eb337986d2_11', 'fe_array_keys_5f22032aaab3ba673c0479eb337986d2_11', 'fe_n_items_5f22032aaab3ba673c0479eb337986d2_11', 'fe_n_items_processed_5f22032aaab3ba673c0479eb337986d2_11', 'fe_i_5f22032aaab3ba673c0479eb337986d2_11', 'fe_key_5f22032aaab3ba673c0479eb337986d2_11', 'fe_val_5f22032aaab3ba673c0479eb337986d2_11', 'fe_offset_5f22032aaab3ba673c0479eb337986d2_11', 'fe_max_5f22032aaab3ba673c0479eb337986d2_11', 'fe_reverse_5f22032aaab3ba673c0479eb337986d2_11', 'fe_first_val_5f22032aaab3ba673c0479eb337986d2_11', 'fe_last_val_5f22032aaab3ba673c0479eb337986d2_11' );
unset( $fe_array_5f22032aaab3ba673c0479eb337986d2_11 );
unset( $fe_array_5f22032aaab3ba673c0479eb337986d2_11 );
$fe_array_5f22032aaab3ba673c0479eb337986d2_11 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagedata', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagedata'] : null;
$fe_array_5f22032aaab3ba673c0479eb337986d2_111 = compiledFetchAttribute( $fe_array_5f22032aaab3ba673c0479eb337986d2_11, 'persistent_variable' );
unset( $fe_array_5f22032aaab3ba673c0479eb337986d2_11 );
$fe_array_5f22032aaab3ba673c0479eb337986d2_11 = $fe_array_5f22032aaab3ba673c0479eb337986d2_111;
$fe_array_5f22032aaab3ba673c0479eb337986d2_111 = compiledFetchAttribute( $fe_array_5f22032aaab3ba673c0479eb337986d2_11, 'extra_template_list' );
unset( $fe_array_5f22032aaab3ba673c0479eb337986d2_11 );
$fe_array_5f22032aaab3ba673c0479eb337986d2_11 = $fe_array_5f22032aaab3ba673c0479eb337986d2_111;
if (! isset( $fe_array_5f22032aaab3ba673c0479eb337986d2_11 ) ) $fe_array_5f22032aaab3ba673c0479eb337986d2_11 = NULL;
while ( is_object( $fe_array_5f22032aaab3ba673c0479eb337986d2_11 ) and method_exists( $fe_array_5f22032aaab3ba673c0479eb337986d2_11, 'templateValue' ) )
    $fe_array_5f22032aaab3ba673c0479eb337986d2_11 = $fe_array_5f22032aaab3ba673c0479eb337986d2_11->templateValue();

$fe_array_keys_5f22032aaab3ba673c0479eb337986d2_11 = is_array( $fe_array_5f22032aaab3ba673c0479eb337986d2_11 ) ? array_keys( $fe_array_5f22032aaab3ba673c0479eb337986d2_11 ) : array();
$fe_n_items_5f22032aaab3ba673c0479eb337986d2_11 = count( $fe_array_keys_5f22032aaab3ba673c0479eb337986d2_11 );
$fe_n_items_processed_5f22032aaab3ba673c0479eb337986d2_11 = 0;
$fe_offset_5f22032aaab3ba673c0479eb337986d2_11 = 0;
$fe_max_5f22032aaab3ba673c0479eb337986d2_11 = $fe_n_items_5f22032aaab3ba673c0479eb337986d2_11 - $fe_offset_5f22032aaab3ba673c0479eb337986d2_11;
$fe_reverse_5f22032aaab3ba673c0479eb337986d2_11 = false;
if ( $fe_offset_5f22032aaab3ba673c0479eb337986d2_11 < 0 || $fe_offset_5f22032aaab3ba673c0479eb337986d2_11 >= $fe_n_items_5f22032aaab3ba673c0479eb337986d2_11 )
{
    $fe_offset_5f22032aaab3ba673c0479eb337986d2_11 = ( $fe_offset_5f22032aaab3ba673c0479eb337986d2_11 < 0 ) ? 0 : $fe_n_items_5f22032aaab3ba673c0479eb337986d2_11;
    if ( $fe_n_items_5f22032aaab3ba673c0479eb337986d2_11 || $fe_offset_5f22032aaab3ba673c0479eb337986d2_11 < 0 )
 {
        eZDebug::writeWarning("Invalid 'offset' parameter specified: '$fe_offset_5f22032aaab3ba673c0479eb337986d2_11'. Array count: $fe_n_items_5f22032aaab3ba673c0479eb337986d2_11");   
}
}
if ( $fe_max_5f22032aaab3ba673c0479eb337986d2_11 < 0 || $fe_offset_5f22032aaab3ba673c0479eb337986d2_11 + $fe_max_5f22032aaab3ba673c0479eb337986d2_11 > $fe_n_items_5f22032aaab3ba673c0479eb337986d2_11 )
{
    if ( $fe_max_5f22032aaab3ba673c0479eb337986d2_11 < 0 )
 eZDebug::writeWarning("Invalid 'max' parameter specified: $fe_max_5f22032aaab3ba673c0479eb337986d2_11");
    $fe_max_5f22032aaab3ba673c0479eb337986d2_11 = $fe_n_items_5f22032aaab3ba673c0479eb337986d2_11 - $fe_offset_5f22032aaab3ba673c0479eb337986d2_11;
}
if ( $fe_reverse_5f22032aaab3ba673c0479eb337986d2_11 )
{
    $fe_first_val_5f22032aaab3ba673c0479eb337986d2_11 = $fe_n_items_5f22032aaab3ba673c0479eb337986d2_11 - 1 - $fe_offset_5f22032aaab3ba673c0479eb337986d2_11;
    $fe_last_val_5f22032aaab3ba673c0479eb337986d2_11  = 0;
}
else
{
    $fe_first_val_5f22032aaab3ba673c0479eb337986d2_11 = $fe_offset_5f22032aaab3ba673c0479eb337986d2_11;
    $fe_last_val_5f22032aaab3ba673c0479eb337986d2_11  = $fe_n_items_5f22032aaab3ba673c0479eb337986d2_11 - 1;
}
// foreach
for ( $fe_i_5f22032aaab3ba673c0479eb337986d2_11 = $fe_first_val_5f22032aaab3ba673c0479eb337986d2_11; $fe_n_items_processed_5f22032aaab3ba673c0479eb337986d2_11 < $fe_max_5f22032aaab3ba673c0479eb337986d2_11 && ( $fe_reverse_5f22032aaab3ba673c0479eb337986d2_11 ? $fe_i_5f22032aaab3ba673c0479eb337986d2_11 >= $fe_last_val_5f22032aaab3ba673c0479eb337986d2_11 : $fe_i_5f22032aaab3ba673c0479eb337986d2_11 <= $fe_last_val_5f22032aaab3ba673c0479eb337986d2_11 ); $fe_reverse_5f22032aaab3ba673c0479eb337986d2_11 ? $fe_i_5f22032aaab3ba673c0479eb337986d2_11-- : $fe_i_5f22032aaab3ba673c0479eb337986d2_11++ )
{
$fe_key_5f22032aaab3ba673c0479eb337986d2_11 = $fe_array_keys_5f22032aaab3ba673c0479eb337986d2_11[$fe_i_5f22032aaab3ba673c0479eb337986d2_11];
$fe_val_5f22032aaab3ba673c0479eb337986d2_11 = $fe_array_5f22032aaab3ba673c0479eb337986d2_11[$fe_key_5f22032aaab3ba673c0479eb337986d2_11];
$vars[$rootNamespace]['extra_template'] = $fe_val_5f22032aaab3ba673c0479eb337986d2_11;
$text .= '        ';
$textElements = array();
$tpl->processFunction( 'include', $textElements,
                       false,
                       array (
  'uri' => 
  array (
    0 => 
    array (
      0 => 6,
      1 => 
      array (
        0 => 'concat',
        1 => 
        array (
          0 => 
          array (
            0 => 1,
            1 => 'design:extra/',
            2 => false,
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            0 => 4,
            1 => 
            array (
              0 => '',
              1 => 2,
              2 => 'extra_template',
            ),
            2 => false,
          ),
        ),
      ),
      2 => false,
    ),
  ),
),
                       array (
  0 => 
  array (
    0 => 39,
    1 => 8,
    2 => 1648,
  ),
  1 => 
  array (
    0 => 39,
    1 => 60,
    2 => 1700,
  ),
  2 => 'extension/ezdemo/design/ezdemo/templates/pagelayout.tpl',
),
                       $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );

$text .= '    ';
$fe_n_items_processed_5f22032aaab3ba673c0479eb337986d2_11++;
} // foreach
$skipDelimiter = false;
if ( count( $fe_variable_stack_5f22032aaab3ba673c0479eb337986d2_11 ) ) extract( array_pop( $fe_variable_stack_5f22032aaab3ba673c0479eb337986d2_11 ) );

else
{

unset( $fe_array_5f22032aaab3ba673c0479eb337986d2_11 );

unset( $fe_array_keys_5f22032aaab3ba673c0479eb337986d2_11 );

unset( $fe_n_items_5f22032aaab3ba673c0479eb337986d2_11 );

unset( $fe_n_items_processed_5f22032aaab3ba673c0479eb337986d2_11 );

unset( $fe_i_5f22032aaab3ba673c0479eb337986d2_11 );

unset( $fe_key_5f22032aaab3ba673c0479eb337986d2_11 );

unset( $fe_val_5f22032aaab3ba673c0479eb337986d2_11 );

unset( $fe_offset_5f22032aaab3ba673c0479eb337986d2_11 );

unset( $fe_max_5f22032aaab3ba673c0479eb337986d2_11 );

unset( $fe_reverse_5f22032aaab3ba673c0479eb337986d2_11 );

unset( $fe_first_val_5f22032aaab3ba673c0479eb337986d2_11 );

unset( $fe_last_val_5f22032aaab3ba673c0479eb337986d2_11 );

unset( $fe_variable_stack_5f22032aaab3ba673c0479eb337986d2_11 );

}

// foreach ends
$text .= '    ';
}
unset( $if_cond );
// if ends

$text .= '
    <!-- Header area: START -->
    ';
$oldRestoreIncludeArray_d707ea77a60458db0254eff502c0b990 = isset( $restoreIncludeArray ) ? $restoreIncludeArray : array();
$restoreIncludeArray = array();

if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( "design" );
    $dKeys = $resH->keys();
}

$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/page_header-cfa9cf5653a7e6a0f45ef8edc300c513.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/templates/page_header.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/page_header-cfa9cf5653a7e6a0f45ef8edc300c513.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/templates/page_header.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

foreach ( $restoreIncludeArray as $element )
{
    if ( $element[2] === 'unset' )
    {
        unset( $vars[$element[0]][$element[1]] );
        continue;
    }
    $vars[$element[0]][$element[1]] = $element[2];
}
$restoreIncludeArray = $oldRestoreIncludeArray_d707ea77a60458db0254eff502c0b990;

$text .= '    <!-- Header area: END -->

    ';
unset( $cacheKeys );
unset( $cacheKeys1 );
unset( $cacheKeys1 );
$cacheKeys1 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'module_result', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['module_result'] : null;
$cacheKeys2 = compiledFetchAttribute( $cacheKeys1, 'uri' );
unset( $cacheKeys1 );
$cacheKeys1 = $cacheKeys2;
if (! isset( $cacheKeys1 ) ) $cacheKeys1 = NULL;
while ( is_object( $cacheKeys1 ) and method_exists( $cacheKeys1, 'templateValue' ) )
    $cacheKeys1 = $cacheKeys1->templateValue();
while ( is_object( $cacheKeys1 ) and method_exists( $cacheKeys1, 'templateValue' ) )
    $cacheKeys1 = $cacheKeys1->templateValue();
unset( $cacheKeys2 );
unset( $cacheKeys2 );
$cacheKeys2 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'user_hash', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['user_hash'] : null;
if (! isset( $cacheKeys2 ) ) $cacheKeys2 = NULL;
while ( is_object( $cacheKeys2 ) and method_exists( $cacheKeys2, 'templateValue' ) )
    $cacheKeys2 = $cacheKeys2->templateValue();
while ( is_object( $cacheKeys2 ) and method_exists( $cacheKeys2, 'templateValue' ) )
    $cacheKeys2 = $cacheKeys2->templateValue();
unset( $cacheKeys3 );
unset( $cacheKeys3 );
$cacheKeys3 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'extra_cache_key', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['extra_cache_key'] : null;
if (! isset( $cacheKeys3 ) ) $cacheKeys3 = NULL;
while ( is_object( $cacheKeys3 ) and method_exists( $cacheKeys3, 'templateValue' ) )
    $cacheKeys3 = $cacheKeys3->templateValue();
while ( is_object( $cacheKeys3 ) and method_exists( $cacheKeys3, 'templateValue' ) )
    $cacheKeys3 = $cacheKeys3->templateValue();
$cacheKeys = array( $cacheKeys1, $cacheKeys2, $cacheKeys3 );unset( $cacheKeys1, $cacheKeys2, $cacheKeys3 );
if (! isset( $cacheKeys ) ) $cacheKeys = NULL;
while ( is_object( $cacheKeys ) and method_exists( $cacheKeys, 'templateValue' ) )
    $cacheKeys = $cacheKeys->templateValue();

$subtreeExpiry = NULL;
$cacheKeys = array( $cacheKeys, "47_4_47_78_extension/ezdemo/design/ezdemo/templates/pagelayout.tpl", "fre" );

list($cacheHandler_29bca02a173b27a9e8262c4905dd708a, $contentData) =
  eZTemplateCacheBlock::retrieve( $cacheKeys, $subtreeExpiry, 7200, true );
if ( !( $contentData instanceof eZClusterFileFailure ) )
{

$text .= $contentData;
    unset( $contentData );
}
else
{
    unset( $contentData );
if ( !isset( $textStack ) )
    $textStack = array();
$textStack[] = $text;
$text = '';
$text .= '
    <div class="navbar main-navi">
        <!-- Top menu area: START -->
        ';
// if begins
unset( $if_cond );
unset( $if_cond );
$if_cond = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagedata', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagedata'] : null;
$if_cond1 = compiledFetchAttribute( $if_cond, 'top_menu' );
unset( $if_cond );
$if_cond = $if_cond1;
if (! isset( $if_cond ) ) $if_cond = NULL;
while ( is_object( $if_cond ) and method_exists( $if_cond, 'templateValue' ) )
    $if_cond = $if_cond->templateValue();

if ( $if_cond )
{
$text .= '            ';
$oldRestoreIncludeArray_8ec454403b21575081ed06446609289d = isset( $restoreIncludeArray ) ? $restoreIncludeArray : array();
$restoreIncludeArray = array();

if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( "design" );
    $dKeys = $resH->keys();
}

$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/page_topmenu-0885458d44fba8304b7179811ac63c5c.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/templates/page_topmenu.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/page_topmenu-0885458d44fba8304b7179811ac63c5c.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/templates/page_topmenu.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

foreach ( $restoreIncludeArray as $element )
{
    if ( $element[2] === 'unset' )
    {
        unset( $vars[$element[0]][$element[1]] );
        continue;
    }
    $vars[$element[0]][$element[1]] = $element[2];
}
$restoreIncludeArray = $oldRestoreIncludeArray_8ec454403b21575081ed06446609289d;

$text .= '        ';
}
unset( $if_cond );
// if ends

$text .= '        <!-- Top menu area: END -->

        <!-- Path area: START -->
        ';
// if begins
unset( $if_cond );
unset( $if_cond );
$if_cond = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagedata', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagedata'] : null;
$if_cond1 = compiledFetchAttribute( $if_cond, 'show_path' );
unset( $if_cond );
$if_cond = $if_cond1;
if (! isset( $if_cond ) ) $if_cond = NULL;
while ( is_object( $if_cond ) and method_exists( $if_cond, 'templateValue' ) )
    $if_cond = $if_cond->templateValue();

if ( $if_cond )
{
$text .= '            ';
$oldRestoreIncludeArray_66aa0c2216f0169eb9337f8bae15069c = isset( $restoreIncludeArray ) ? $restoreIncludeArray : array();
$restoreIncludeArray = array();

if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( "design" );
    $dKeys = $resH->keys();
}

$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/page_toppath-0cc01eb5bcb2b4df1214e954738c6def.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/templates/page_toppath.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/page_toppath-0cc01eb5bcb2b4df1214e954738c6def.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/templates/page_toppath.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

foreach ( $restoreIncludeArray as $element )
{
    if ( $element[2] === 'unset' )
    {
        unset( $vars[$element[0]][$element[1]] );
        continue;
    }
    $vars[$element[0]][$element[1]] = $element[2];
}
$restoreIncludeArray = $oldRestoreIncludeArray_66aa0c2216f0169eb9337f8bae15069c;

$text .= '        ';
}
unset( $if_cond );
// if ends

$text .= '        <!-- Path area: END -->
    </div>

    <!-- Toolbar area: START -->
    ';
// if begins
unset( $if_cond );
unset( $if_cond1 );
unset( $if_cond1 );
$if_cond1 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagedata', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagedata'] : null;
$if_cond2 = compiledFetchAttribute( $if_cond1, 'website_toolbar' );
unset( $if_cond1 );
$if_cond1 = $if_cond2;
if (! isset( $if_cond1 ) ) $if_cond1 = NULL;
while ( is_object( $if_cond1 ) and method_exists( $if_cond1, 'templateValue' ) )
    $if_cond1 = $if_cond1->templateValue();
unset( $if_cond2 );
unset( $if_cond3 );
unset( $if_cond3 );
$if_cond3 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagedata', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagedata'] : null;
$if_cond4 = compiledFetchAttribute( $if_cond3, 'is_edit' );
unset( $if_cond3 );
$if_cond3 = $if_cond4;
if (! isset( $if_cond3 ) ) $if_cond3 = NULL;
while ( is_object( $if_cond3 ) and method_exists( $if_cond3, 'templateValue' ) )
    $if_cond3 = $if_cond3->templateValue();
$if_cond2 = !( $if_cond3 );
unset( $if_cond3 );
if (! isset( $if_cond2 ) ) $if_cond2 = NULL;
while ( is_object( $if_cond2 ) and method_exists( $if_cond2, 'templateValue' ) )
    $if_cond2 = $if_cond2->templateValue();
if ( !$if_cond1 )
    $if_cond = false;
else if ( !$if_cond2 )
    $if_cond = false;
else
    $if_cond = $if_cond2;
unset( $if_cond1, $if_cond2 );
if (! isset( $if_cond ) ) $if_cond = NULL;
while ( is_object( $if_cond ) and method_exists( $if_cond, 'templateValue' ) )
    $if_cond = $if_cond->templateValue();

if ( $if_cond )
{
$text .= '        ';
$oldRestoreIncludeArray_371a30292665ef3cd954bf1be157e2e1 = isset( $restoreIncludeArray ) ? $restoreIncludeArray : array();
$restoreIncludeArray = array();

if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( "design" );
    $dKeys = $resH->keys();
}

$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/page_toolbar-64536edea796d3453021b0b1f7f204d8.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/templates/page_toolbar.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/page_toolbar-64536edea796d3453021b0b1f7f204d8.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/templates/page_toolbar.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

foreach ( $restoreIncludeArray as $element )
{
    if ( $element[2] === 'unset' )
    {
        unset( $vars[$element[0]][$element[1]] );
        continue;
    }
    $vars[$element[0]][$element[1]] = $element[2];
}
$restoreIncludeArray = $oldRestoreIncludeArray_371a30292665ef3cd954bf1be157e2e1;

$text .= '    ';
}
unset( $if_cond );
// if ends

$text .= '    <!-- Toolbar area: END -->

    <!-- Columns area: START -->
    <div class="container">
        <div class="row">
            <!-- Side menu area: START -->
            ';
// if begins
unset( $if_cond );
unset( $if_cond );
$if_cond = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagedata', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagedata'] : null;
$if_cond1 = compiledFetchAttribute( $if_cond, 'left_menu' );
unset( $if_cond );
$if_cond = $if_cond1;
if (! isset( $if_cond ) ) $if_cond = NULL;
while ( is_object( $if_cond ) and method_exists( $if_cond, 'templateValue' ) )
    $if_cond = $if_cond->templateValue();

if ( $if_cond )
{
$text .= '                ';
$oldRestoreIncludeArray_8f8009de22ccdfe4a78a5588a4a7f0c2 = isset( $restoreIncludeArray ) ? $restoreIncludeArray : array();
$restoreIncludeArray = array();

if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( "design" );
    $dKeys = $resH->keys();
}

$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/page_leftmenu-bfbb518b9a745c9ab13326fd52232338.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/templates/page_leftmenu.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/page_leftmenu-bfbb518b9a745c9ab13326fd52232338.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/templates/page_leftmenu.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

foreach ( $restoreIncludeArray as $element )
{
    if ( $element[2] === 'unset' )
    {
        unset( $vars[$element[0]][$element[1]] );
        continue;
    }
    $vars[$element[0]][$element[1]] = $element[2];
}
$restoreIncludeArray = $oldRestoreIncludeArray_8f8009de22ccdfe4a78a5588a4a7f0c2;

$text .= '            ';
}
unset( $if_cond );
// if ends

$text .= '            <!-- Side menu area: END -->
    ';
$cachedText = $text;
$cacheHandler_29bca02a173b27a9e8262c4905dd708a->storeCache( array( 'scope' => 'template-block', 'binarydata' => $cachedText ) );

$text = array_pop( $textStack );
$text .= $cachedText;
    unset( $cachedText, $cacheHandler_29bca02a173b27a9e8262c4905dd708a );
}

$text .= '    ';
$cachedText = $text;
$cacheHandler_78fe9ca7c1039bac2f325180035b3f27->storeCache( array( 'scope' => 'template-block', 'binarydata' => $cachedText ) );

$text = array_pop( $textStack );
$text .= $cachedText;
    unset( $cachedText, $cacheHandler_78fe9ca7c1039bac2f325180035b3f27 );
}

$text .= '            <!-- Main area: START -->
            ';
$oldRestoreIncludeArray_0075fd3fd4f760e7bf3c9d968d164198 = isset( $restoreIncludeArray ) ? $restoreIncludeArray : array();
$restoreIncludeArray = array();

if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( "design" );
    $dKeys = $resH->keys();
}

$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/page_mainarea-76185b2d64ad81449605dd64b1c874c6.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/templates/page_mainarea.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/page_mainarea-76185b2d64ad81449605dd64b1c874c6.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/templates/page_mainarea.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

foreach ( $restoreIncludeArray as $element )
{
    if ( $element[2] === 'unset' )
    {
        unset( $vars[$element[0]][$element[1]] );
        continue;
    }
    $vars[$element[0]][$element[1]] = $element[2];
}
$restoreIncludeArray = $oldRestoreIncludeArray_0075fd3fd4f760e7bf3c9d968d164198;

$text .= '            <!-- Main area: END -->
            ';
unset( $cacheKeys );
unset( $cacheKeys1 );
unset( $cacheKeys1 );
$cacheKeys1 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'module_result', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['module_result'] : null;
$cacheKeys2 = compiledFetchAttribute( $cacheKeys1, 'uri' );
unset( $cacheKeys1 );
$cacheKeys1 = $cacheKeys2;
if (! isset( $cacheKeys1 ) ) $cacheKeys1 = NULL;
while ( is_object( $cacheKeys1 ) and method_exists( $cacheKeys1, 'templateValue' ) )
    $cacheKeys1 = $cacheKeys1->templateValue();
while ( is_object( $cacheKeys1 ) and method_exists( $cacheKeys1, 'templateValue' ) )
    $cacheKeys1 = $cacheKeys1->templateValue();
unset( $cacheKeys2 );
unset( $cacheKeys2 );
$cacheKeys2 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'user_hash', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['user_hash'] : null;
if (! isset( $cacheKeys2 ) ) $cacheKeys2 = NULL;
while ( is_object( $cacheKeys2 ) and method_exists( $cacheKeys2, 'templateValue' ) )
    $cacheKeys2 = $cacheKeys2->templateValue();
while ( is_object( $cacheKeys2 ) and method_exists( $cacheKeys2, 'templateValue' ) )
    $cacheKeys2 = $cacheKeys2->templateValue();
unset( $cacheKeys3 );
unset( $cacheKeys3 );
$cacheKeys3 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'access_type', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['access_type'] : null;
$cacheKeys4 = compiledFetchAttribute( $cacheKeys3, 'name' );
unset( $cacheKeys3 );
$cacheKeys3 = $cacheKeys4;
if (! isset( $cacheKeys3 ) ) $cacheKeys3 = NULL;
while ( is_object( $cacheKeys3 ) and method_exists( $cacheKeys3, 'templateValue' ) )
    $cacheKeys3 = $cacheKeys3->templateValue();
while ( is_object( $cacheKeys3 ) and method_exists( $cacheKeys3, 'templateValue' ) )
    $cacheKeys3 = $cacheKeys3->templateValue();
unset( $cacheKeys4 );
unset( $cacheKeys4 );
$cacheKeys4 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'extra_cache_key', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['extra_cache_key'] : null;
if (! isset( $cacheKeys4 ) ) $cacheKeys4 = NULL;
while ( is_object( $cacheKeys4 ) and method_exists( $cacheKeys4, 'templateValue' ) )
    $cacheKeys4 = $cacheKeys4->templateValue();
while ( is_object( $cacheKeys4 ) and method_exists( $cacheKeys4, 'templateValue' ) )
    $cacheKeys4 = $cacheKeys4->templateValue();
$cacheKeys = array( $cacheKeys1, $cacheKeys2, $cacheKeys3, $cacheKeys4 );unset( $cacheKeys1, $cacheKeys2, $cacheKeys3, $cacheKeys4 );
if (! isset( $cacheKeys ) ) $cacheKeys = NULL;
while ( is_object( $cacheKeys ) and method_exists( $cacheKeys, 'templateValue' ) )
    $cacheKeys = $cacheKeys->templateValue();

$subtreeExpiry = NULL;
$cacheKeys = array( $cacheKeys, "82_12_82_105_extension/ezdemo/design/ezdemo/templates/pagelayout.tpl", "fre" );

list($cacheHandler_9d778d2351c6a18059d8ad5a4783db73, $contentData) =
  eZTemplateCacheBlock::retrieve( $cacheKeys, $subtreeExpiry, 7200, true );
if ( !( $contentData instanceof eZClusterFileFailure ) )
{

$text .= $contentData;
    unset( $contentData );
}
else
{
    unset( $contentData );
if ( !isset( $textStack ) )
    $textStack = array();
$textStack[] = $text;
$text = '';
$text .= '
            <!-- Extra area: START -->
            ';
// if begins
unset( $if_cond );
unset( $if_cond );
$if_cond = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagedata', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagedata'] : null;
$if_cond1 = compiledFetchAttribute( $if_cond, 'extra_menu' );
unset( $if_cond );
$if_cond = $if_cond1;
if (! isset( $if_cond ) ) $if_cond = NULL;
while ( is_object( $if_cond ) and method_exists( $if_cond, 'templateValue' ) )
    $if_cond = $if_cond->templateValue();

if ( $if_cond )
{
$text .= '                ';
$oldRestoreIncludeArray_d39d8ea98979eecf6e28cd82282f6303 = isset( $restoreIncludeArray ) ? $restoreIncludeArray : array();
$restoreIncludeArray = array();

if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( "design" );
    $dKeys = $resH->keys();
}

$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/page_extramenu-6969332a26b77afc8729fef41bee7fd3.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/templates/page_extramenu.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/page_extramenu-6969332a26b77afc8729fef41bee7fd3.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/templates/page_extramenu.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

foreach ( $restoreIncludeArray as $element )
{
    if ( $element[2] === 'unset' )
    {
        unset( $vars[$element[0]][$element[1]] );
        continue;
    }
    $vars[$element[0]][$element[1]] = $element[2];
}
$restoreIncludeArray = $oldRestoreIncludeArray_d39d8ea98979eecf6e28cd82282f6303;

$text .= '            ';
}
unset( $if_cond );
// if ends

$text .= '            <!-- Extra area: END -->
        </div>
    </div>
    <!-- Columns area: END -->

    <!-- Footer area: START -->
    ';
$oldRestoreIncludeArray_d22c01d36e8faed1ce332d002aa355f5 = isset( $restoreIncludeArray ) ? $restoreIncludeArray : array();
$restoreIncludeArray = array();

if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( "design" );
    $dKeys = $resH->keys();
}

$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/page_footer-582fe6173296ede4be0318fb635a0589.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/templates/page_footer.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/page_footer-582fe6173296ede4be0318fb635a0589.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/templates/page_footer.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

foreach ( $restoreIncludeArray as $element )
{
    if ( $element[2] === 'unset' )
    {
        unset( $vars[$element[0]][$element[1]] );
        continue;
    }
    $vars[$element[0]][$element[1]] = $element[2];
}
$restoreIncludeArray = $oldRestoreIncludeArray_d22c01d36e8faed1ce332d002aa355f5;

$text .= '    <!-- Footer area: END -->

</div>
<!-- Complete page area: END -->

<!-- Footer script area: START -->';
$oldRestoreIncludeArray_12ff9db26fc6437d9e77abac83b2842c = isset( $restoreIncludeArray ) ? $restoreIncludeArray : array();
$restoreIncludeArray = array();

if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( "design" );
    $dKeys = $resH->keys();
}

$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/page_footer_script-b2c173b0b9ac9c990fb4ce167aef712a.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/templates/page_footer_script.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/page_footer_script-b2c173b0b9ac9c990fb4ce167aef712a.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/templates/page_footer_script.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

foreach ( $restoreIncludeArray as $element )
{
    if ( $element[2] === 'unset' )
    {
        unset( $vars[$element[0]][$element[1]] );
        continue;
    }
    $vars[$element[0]][$element[1]] = $element[2];
}
$restoreIncludeArray = $oldRestoreIncludeArray_12ff9db26fc6437d9e77abac83b2842c;

$text .= '<!-- Footer script area: END -->
';
$cachedText = $text;
$cacheHandler_9d778d2351c6a18059d8ad5a4783db73->storeCache( array( 'scope' => 'template-block', 'binarydata' => $cachedText ) );

$text = array_pop( $textStack );
$text .= $cachedText;
    unset( $cachedText, $cacheHandler_9d778d2351c6a18059d8ad5a4783db73 );
}

$text .= '

<!--DEBUG_REPORT-->
</body>
</html>
';

$setArray = $oldSetArray_13e090a3271369dcbb22f652f2140517;
$tpl->Level--;
?>
