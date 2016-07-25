<?php
// URI:       extension/ezflow/design/standard/templates/parts/zone_block.tpl
// Filename:  extension/ezflow/design/standard/templates/parts/zone_block.tpl
// Timestamp: 1463821098 (Sat May 21 10:58:18 CEST 2016)
$oldSetArray_b2b91d8c81968fb0d25312d42643075f = isset( $setArray ) ? $setArray : array();
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

$oldRestoreIncludeArray_28327705200117a86806f274aeae322e = isset( $restoreIncludeArray ) ? $restoreIncludeArray : array();
$restoreIncludeArray = array();

if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( "design" );
    $dKeys = $resH->keys();
}

$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/zone_block_top-404c1596f8a4cb083be98fd73d99f385.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezflow/design/standard/templates/parts/zone_block_top.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/zone_block_top-404c1596f8a4cb083be98fd73d99f385.php' );
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
$tpl->processURI( 'extension/ezflow/design/standard/templates/parts/zone_block_top.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
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
$restoreIncludeArray = $oldRestoreIncludeArray_28327705200117a86806f274aeae322e;

// if begins
unset( $if_cond );
unset( $if_cond1 );
unset( $if_cond1 );
$if_cond1 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'block', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['block'] : null;
$if_cond2 = compiledFetchAttribute( $if_cond1, 'valid_nodes' );
unset( $if_cond1 );
$if_cond1 = $if_cond2;
if (! isset( $if_cond1 ) ) $if_cond1 = NULL;
while ( is_object( $if_cond1 ) and method_exists( $if_cond1, 'templateValue' ) )
    $if_cond1 = $if_cond1->templateValue();
$if_cond1Data = array( 'value' => $if_cond1 );
$tpl->processOperator( 'count',
                       array (
),
                       $rootNamespace, $currentNamespace, $if_cond1Data, false, false );
$if_cond1 = $if_cond1Data['value'];
unset( $if_cond1Data );
if (! isset( $if_cond1 ) ) $if_cond1 = NULL;
while ( is_object( $if_cond1 ) and method_exists( $if_cond1, 'templateValue' ) )
    $if_cond1 = $if_cond1->templateValue();
unset( $if_cond2 );
unset( $if_cond3 );
unset( $if_cond4 );
unset( $if_cond4 );
$if_cond4 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'block', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['block'] : null;
$if_cond5 = compiledFetchAttribute( $if_cond4, 'custom_attributes' );
unset( $if_cond4 );
$if_cond4 = $if_cond5;
if (! isset( $if_cond4 ) ) $if_cond4 = NULL;
while ( is_object( $if_cond4 ) and method_exists( $if_cond4, 'templateValue' ) )
    $if_cond4 = $if_cond4->templateValue();
$if_cond3 = isset( $if_cond4 );unset( $if_cond4 );
if (! isset( $if_cond3 ) ) $if_cond3 = NULL;
while ( is_object( $if_cond3 ) and method_exists( $if_cond3, 'templateValue' ) )
    $if_cond3 = $if_cond3->templateValue();
unset( $if_cond4 );
unset( $if_cond4 );
$if_cond4 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'block', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['block'] : null;
$if_cond5 = compiledFetchAttribute( $if_cond4, 'custom_attributes' );
unset( $if_cond4 );
$if_cond4 = $if_cond5;
if (! isset( $if_cond4 ) ) $if_cond4 = NULL;
while ( is_object( $if_cond4 ) and method_exists( $if_cond4, 'templateValue' ) )
    $if_cond4 = $if_cond4->templateValue();
$if_cond4Data = array( 'value' => $if_cond4 );
$tpl->processOperator( 'count',
                       array (
),
                       $rootNamespace, $currentNamespace, $if_cond4Data, false, false );
$if_cond4 = $if_cond4Data['value'];
unset( $if_cond4Data );
if (! isset( $if_cond4 ) ) $if_cond4 = NULL;
while ( is_object( $if_cond4 ) and method_exists( $if_cond4, 'templateValue' ) )
    $if_cond4 = $if_cond4->templateValue();
if ( !$if_cond3 )
    $if_cond2 = false;
else if ( !$if_cond4 )
    $if_cond2 = false;
else
    $if_cond2 = $if_cond4;
unset( $if_cond3, $if_cond4 );
if (! isset( $if_cond2 ) ) $if_cond2 = NULL;
while ( is_object( $if_cond2 ) and method_exists( $if_cond2, 'templateValue' ) )
    $if_cond2 = $if_cond2->templateValue();
unset( $if_cond3 );
unset( $if_cond4 );
unset( $if_cond5 );
if (! isset( $if_cond5 ) ) $if_cond5 = NULL;
while ( is_object( $if_cond5 ) and method_exists( $if_cond5, 'templateValue' ) )
    $if_cond5 = $if_cond5->templateValue();
$if_cond5Data = array( 'value' => $if_cond5 );
$tpl->processOperator( 'ezini',
                       array (
  0 => 
  array (
    0 => 
    array (
      0 => 4,
      1 => 
      array (
        0 => '',
        1 => 2,
        2 => 'block',
      ),
      2 => false,
    ),
    1 => 
    array (
      0 => 5,
      1 => 
      array (
        0 => 
        array (
          0 => 3,
          1 => 'type',
          2 => false,
        ),
      ),
      2 => false,
    ),
  ),
  1 => 
  array (
    0 => 
    array (
      0 => 1,
      1 => 'ManualAddingOfItems',
      2 => false,
    ),
  ),
  2 => 
  array (
    0 => 
    array (
      0 => 1,
      1 => 'block.ini',
      2 => false,
    ),
  ),
),
                       $rootNamespace, $currentNamespace, $if_cond5Data, false, false );
$if_cond5 = $if_cond5Data['value'];
unset( $if_cond5Data );
if (! isset( $if_cond5 ) ) $if_cond5 = NULL;
while ( is_object( $if_cond5 ) and method_exists( $if_cond5, 'templateValue' ) )
    $if_cond5 = $if_cond5->templateValue();
$if_cond4 = ( ( $if_cond5 ) == ( 'disabled' ) );
unset( $if_cond5 );
if (! isset( $if_cond4 ) ) $if_cond4 = NULL;
while ( is_object( $if_cond4 ) and method_exists( $if_cond4, 'templateValue' ) )
    $if_cond4 = $if_cond4->templateValue();
unset( $if_cond5 );
unset( $if_cond6 );
if (! isset( $if_cond6 ) ) $if_cond6 = NULL;
while ( is_object( $if_cond6 ) and method_exists( $if_cond6, 'templateValue' ) )
    $if_cond6 = $if_cond6->templateValue();
$if_cond6Data = array( 'value' => $if_cond6 );
$tpl->processOperator( 'ezini_hasvariable',
                       array (
  0 => 
  array (
    0 => 
    array (
      0 => 4,
      1 => 
      array (
        0 => '',
        1 => 2,
        2 => 'block',
      ),
      2 => false,
    ),
    1 => 
    array (
      0 => 5,
      1 => 
      array (
        0 => 
        array (
          0 => 3,
          1 => 'type',
          2 => false,
        ),
      ),
      2 => false,
    ),
  ),
  1 => 
  array (
    0 => 
    array (
      0 => 1,
      1 => 'FetchClass',
      2 => false,
    ),
  ),
  2 => 
  array (
    0 => 
    array (
      0 => 1,
      1 => 'block.ini',
      2 => false,
    ),
  ),
),
                       $rootNamespace, $currentNamespace, $if_cond6Data, false, false );
$if_cond6 = $if_cond6Data['value'];
unset( $if_cond6Data );
if (! isset( $if_cond6 ) ) $if_cond6 = NULL;
while ( is_object( $if_cond6 ) and method_exists( $if_cond6, 'templateValue' ) )
    $if_cond6 = $if_cond6->templateValue();
$if_cond5 = !( $if_cond6 );
unset( $if_cond6 );
if (! isset( $if_cond5 ) ) $if_cond5 = NULL;
while ( is_object( $if_cond5 ) and method_exists( $if_cond5, 'templateValue' ) )
    $if_cond5 = $if_cond5->templateValue();
if ( !$if_cond4 )
    $if_cond3 = false;
else if ( !$if_cond5 )
    $if_cond3 = false;
else
    $if_cond3 = $if_cond5;
unset( $if_cond4, $if_cond5 );
if (! isset( $if_cond3 ) ) $if_cond3 = NULL;
while ( is_object( $if_cond3 ) and method_exists( $if_cond3, 'templateValue' ) )
    $if_cond3 = $if_cond3->templateValue();
if ( $if_cond1 )
    $if_cond = $if_cond1;
else if ( $if_cond2 )
    $if_cond = $if_cond2;
else if ( $if_cond3 )
    $if_cond = $if_cond3;
else
    $if_cond = false;
unset( $if_cond1, $if_cond2, $if_cond3 );
if (! isset( $if_cond ) ) $if_cond = NULL;
while ( is_object( $if_cond ) and method_exists( $if_cond, 'templateValue' ) )
    $if_cond = $if_cond->templateValue();

if ( $if_cond )
{
$text .= '    <div id="address-';
unset( $var );
unset( $var );
$var = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'block', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['block'] : null;
$var1 = compiledFetchAttribute( $var, 'zone_id' );
unset( $var );
$var = $var1;
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
$text .= ( is_object( $var ) ? compiledFetchText( $tpl, $rootNamespace, $currentNamespace, false, $var ) : $var );
unset( $var );

$text .= '-';
unset( $var );
unset( $var );
$var = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'block', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['block'] : null;
$var1 = compiledFetchAttribute( $var, 'id' );
unset( $var );
$var = $var1;
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
$text .= ( is_object( $var ) ? compiledFetchText( $tpl, $rootNamespace, $currentNamespace, false, $var ) : $var );
unset( $var );

$text .= '">
    ';
unset( $var );
unset( $var );
$var = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'block', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['block'] : null;
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
$namespace = $currentNamespace;
if ( $namespace == '' )
    $namespace = "ContentAttributeBlockView";
else
    $namespace .= ':ContentAttributeBlockView';
$vars[$namespace]['block'] = $var;
unset( $var );
if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( 'design' );
    $dKeys = $resH->keys();
}
if ( !isset( $dKeysStack ) )
{
    $dKeysStack = array();
}
$dKeysStack[] = $dKeys;
unset( $dKey );
$namespace = $currentNamespace;
if ( $namespace == '' )
    $namespace = "ContentAttributeBlockView";
else
    $namespace .= ':ContentAttributeBlockView';
unset( $dKey );
$dKey = ( array_key_exists( $namespace, $vars ) and array_key_exists( 'block', $vars[$namespace] ) ) ? $vars[$namespace]['block'] : null;
$dKey1 = compiledFetchAttribute( $dKey, 'type' );
unset( $dKey );
$dKey = $dKey1;
if (! isset( $dKey ) ) $dKey = NULL;
while ( is_object( $dKey ) and method_exists( $dKey, 'templateValue' ) )
    $dKey = $dKey->templateValue();

$dKeys["type"] = $dKey;
unset( $dKey );

unset( $dKey );
$namespace = $currentNamespace;
if ( $namespace == '' )
    $namespace = "ContentAttributeBlockView";
else
    $namespace .= ':ContentAttributeBlockView';
unset( $dKey );
$dKey = ( array_key_exists( $namespace, $vars ) and array_key_exists( 'block', $vars[$namespace] ) ) ? $vars[$namespace]['block'] : null;
$dKey1 = compiledFetchAttribute( $dKey, 'view' );
unset( $dKey );
$dKey = $dKey1;
if (! isset( $dKey ) ) $dKey = NULL;
while ( is_object( $dKey ) and method_exists( $dKey, 'templateValue' ) )
    $dKey = $dKey->templateValue();

$dKeys["view"] = $dKey;
unset( $dKey );

unset( $attributeAccess );
unset( $attributeAccess );
$attributeAccess = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'block', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['block'] : null;
$attributeAccess1 = compiledFetchAttribute( $attributeAccess, 'view_template' );
unset( $attributeAccess );
$attributeAccess = $attributeAccess1;
if (! isset( $attributeAccess ) ) $attributeAccess = NULL;
while ( is_object( $attributeAccess ) and method_exists( $attributeAccess, 'templateValue' ) )
    $attributeAccess = $attributeAccess->templateValue();

if ( $attributeAccess == 'view' )
{

if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "Campaign", $dKeys["type"] ) : $dKeys["type"] == "Campaign" ) and
     isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "default", $dKeys["view"] ) : $dKeys["view"] == "default" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/campaign-1a593f15fb387a8c9d536477e3631849.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/campaign.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/campaign-1a593f15fb387a8c9d536477e3631849.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/campaign.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "MainStory", $dKeys["type"] ) : $dKeys["type"] == "MainStory" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "highligted", $dKeys["view"] ) : $dKeys["view"] == "highligted" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/main_story_highlighted-cceeb611fbe6f8848510f1ff0272b261.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/main_story_highlighted.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/main_story_highlighted-cceeb611fbe6f8848510f1ff0272b261.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/main_story_highlighted.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "MainStory", $dKeys["type"] ) : $dKeys["type"] == "MainStory" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "default", $dKeys["view"] ) : $dKeys["view"] == "default" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/main_story_background_image-20d8c0980c4d1ba02a31247d916b1990.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/main_story_background_image.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/main_story_background_image-20d8c0980c4d1ba02a31247d916b1990.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/main_story_background_image.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "ContentGrid", $dKeys["type"] ) : $dKeys["type"] == "ContentGrid" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "default", $dKeys["view"] ) : $dKeys["view"] == "default" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/content_grid_1col_2rows-b8f6391913a76b5735e6b68cb4183a3f.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/content_grid_1col_2rows.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/content_grid_1col_2rows-b8f6391913a76b5735e6b68cb4183a3f.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/content_grid_1col_2rows.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "ContentGrid", $dKeys["type"] ) : $dKeys["type"] == "ContentGrid" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "1_column_4_rows", $dKeys["view"] ) : $dKeys["view"] == "1_column_4_rows" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/content_grid_1col_4rows-ccea6be2e95c0a56e8253e3a7d64b127.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/content_grid_1col_4rows.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/content_grid_1col_4rows-ccea6be2e95c0a56e8253e3a7d64b127.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/content_grid_1col_4rows.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "ContentGrid", $dKeys["type"] ) : $dKeys["type"] == "ContentGrid" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "2_columns_2_rows", $dKeys["view"] ) : $dKeys["view"] == "2_columns_2_rows" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/content_grid_2cols_2rows-174e7cbde3cf1a17446b8d09056e1922.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/content_grid_2cols_2rows.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/content_grid_2cols_2rows-174e7cbde3cf1a17446b8d09056e1922.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/content_grid_2cols_2rows.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "ContentGrid", $dKeys["type"] ) : $dKeys["type"] == "ContentGrid" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "3_columns_1_row", $dKeys["view"] ) : $dKeys["view"] == "3_columns_1_row" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/content_grid_3cols_1row-b166457eb16ef2a602dd97d176edf352.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/content_grid_3cols_1row.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/content_grid_3cols_1row-b166457eb16ef2a602dd97d176edf352.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/content_grid_3cols_1row.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "ContentGrid", $dKeys["type"] ) : $dKeys["type"] == "ContentGrid" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "3_columns_2_rows", $dKeys["view"] ) : $dKeys["view"] == "3_columns_2_rows" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/content_grid_3cols_2rows-722b1435f1a383b5c863a6f5d3d97263.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/content_grid_3cols_2rows.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/content_grid_3cols_2rows-722b1435f1a383b5c863a6f5d3d97263.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/content_grid_3cols_2rows.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "ContentGrid", $dKeys["type"] ) : $dKeys["type"] == "ContentGrid" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "4_columns_1_row", $dKeys["view"] ) : $dKeys["view"] == "4_columns_1_row" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/content_grid_4cols_1row-77bb3f6edb7f4304bfa3a71cf60a7dc4.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/content_grid_4cols_1row.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/content_grid_4cols_1row-77bb3f6edb7f4304bfa3a71cf60a7dc4.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/content_grid_4cols_1row.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "ContentGrid", $dKeys["type"] ) : $dKeys["type"] == "ContentGrid" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "4_columns_2_rows", $dKeys["view"] ) : $dKeys["view"] == "4_columns_2_rows" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/content_grid_4cols_2rows-90c73992c8da0586cc12cd6cefc11b44.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/content_grid_4cols_2rows.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/content_grid_4cols_2rows-90c73992c8da0586cc12cd6cefc11b44.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/content_grid_4cols_2rows.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "Gallery", $dKeys["type"] ) : $dKeys["type"] == "Gallery" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "default", $dKeys["view"] ) : $dKeys["view"] == "default" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/gallery-7fd3816eb71690b35b4cd631751891f6.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/gallery.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/gallery-7fd3816eb71690b35b4cd631751891f6.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/gallery.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "Banner", $dKeys["type"] ) : $dKeys["type"] == "Banner" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "default", $dKeys["view"] ) : $dKeys["view"] == "default" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/banner_internal-a1d5743967eb0a79877b7d1fe9baa8ed.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/banner_internal.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/banner_internal-a1d5743967eb0a79877b7d1fe9baa8ed.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/banner_internal.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "Banner", $dKeys["type"] ) : $dKeys["type"] == "Banner" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "external", $dKeys["view"] ) : $dKeys["view"] == "external" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/banner_external-724eeef034c9ff81ba3aedd4c7ee06e2.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/banner_external.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/banner_external-724eeef034c9ff81ba3aedd4c7ee06e2.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/banner_external.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "Banner", $dKeys["type"] ) : $dKeys["type"] == "Banner" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "code", $dKeys["view"] ) : $dKeys["view"] == "code" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/banner_code-914df9ae2adc030cad630a0c43f9a5b1.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/banner_code.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/banner_code-914df9ae2adc030cad630a0c43f9a5b1.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/banner_code.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "Video", $dKeys["type"] ) : $dKeys["type"] == "Video" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "default", $dKeys["view"] ) : $dKeys["view"] == "default" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/video-04cf70536674c77c9fcebbd57f3b2888.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/video.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/video-04cf70536674c77c9fcebbd57f3b2888.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/video.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "TagCloud", $dKeys["type"] ) : $dKeys["type"] == "TagCloud" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "default", $dKeys["view"] ) : $dKeys["view"] == "default" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/tag_cloud-1f808e1c1a4def45e669494ad18d0759.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/tag_cloud.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/tag_cloud-1f808e1c1a4def45e669494ad18d0759.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/tag_cloud.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "Poll", $dKeys["type"] ) : $dKeys["type"] == "Poll" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "default", $dKeys["view"] ) : $dKeys["view"] == "default" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/poll-1e882e226052684b17aa16651dfb1446.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/poll.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/poll-1e882e226052684b17aa16651dfb1446.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/poll.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "ItemList", $dKeys["type"] ) : $dKeys["type"] == "ItemList" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "default", $dKeys["view"] ) : $dKeys["view"] == "default" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/item_list-f6b5ded327a5dbf94823e449d9f1fd61.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/item_list.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/item_list-f6b5ded327a5dbf94823e449d9f1fd61.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/item_list.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "FeedReader", $dKeys["type"] ) : $dKeys["type"] == "FeedReader" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "default", $dKeys["view"] ) : $dKeys["view"] == "default" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/feed_reader-8e6e2c8f43d82fb3e64aaa2e425bb0df.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/feed_reader.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/feed_reader-8e6e2c8f43d82fb3e64aaa2e425bb0df.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/feed_reader.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "FeedbackForm", $dKeys["type"] ) : $dKeys["type"] == "FeedbackForm" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "default", $dKeys["view"] ) : $dKeys["view"] == "default" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/feedback_form-e3acc18ba352c683e9abb6008c054be2.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/feedback_form.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/feedback_form-e3acc18ba352c683e9abb6008c054be2.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/feedback_form.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  if ( isset( $dKeys["type"] ) and ( is_array( $dKeys["type"] ) ? in_array( "HighlightedItem", $dKeys["type"] ) : $dKeys["type"] == "HighlightedItem" ) and
           isset( $dKeys["view"] ) and ( is_array( $dKeys["view"] ) ? in_array( "default", $dKeys["view"] ) : $dKeys["view"] == "default" ) )
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/highlighted_item-1dbfc13d0e659c72d235eeac28dfb24d.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezdemo/design/ezdemo/override/templates/block/highlighted_item.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/highlighted_item-1dbfc13d0e659c72d235eeac28dfb24d.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezdemo/design/ezdemo/override/templates/block/highlighted_item.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
else  
{
$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/view-d43a185983b5457f501f62a4d000dfec.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezflow/design/standard/templates/block/view/view.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/view-d43a185983b5457f501f62a4d000dfec.php' );
$tpl->unsetLocalVariables();
$tpl->destroyLocalVariablesList();
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}
else
{
    $resourceFound = true;
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$currentNamespace = $rootNamespace = !$currentNamespace ? 'ContentAttributeBlockView' : ( $currentNamespace . ':' . 'ContentAttributeBlockView' );
$textElements = array();
$extraParameters = array();
$tpl->processURI( 'extension/ezflow/design/standard/templates/block/view/view.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
$text .= implode( '', $textElements );
list( $rootNamespace, $currentNamespace ) = array_pop( $namespaceStack );
}

}
}
$dKeys = array_pop( $dKeysStack );
$namespace = $currentNamespace;
if ( $namespace == '' )
    $namespace = "ContentAttributeBlockView";
else
    $namespace .= ':ContentAttributeBlockView';
unset( $vars[$namespace]['block'] );
$text .= '    </div>
    <div class="block-separator"></div>';
}
unset( $if_cond );
// if ends

$oldRestoreIncludeArray_1fb7854983bac676b87aba62fd6761ed = isset( $restoreIncludeArray ) ? $restoreIncludeArray : array();
$restoreIncludeArray = array();

if ( !isset( $dKeys ) )
{
    $resH = $tpl->resourceHandler( "design" );
    $dKeys = $resH->keys();
}

$resourceFound = false;
if ( file_exists( 'var/ezdemo_site/cache/template/compiled/zone_block_bottom-021b89c36f966b838549903d2d594cb3.php' ) )
{
$resourceFound = true;
$namespaceStack[] = array( $rootNamespace, $currentNamespace );
$rootNamespace = $currentNamespace;
$tpl->createLocalVariablesList();
$tpl->appendTemplateFetch( 'extension/ezflow/design/standard/templates/parts/zone_block_bottom.tpl' );
include( '' . 'var/ezdemo_site/cache/template/compiled/zone_block_bottom-021b89c36f966b838549903d2d594cb3.php' );
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
$tpl->processURI( 'extension/ezflow/design/standard/templates/parts/zone_block_bottom.tpl', true, $extraParameters, $textElements, $rootNamespace, $currentNamespace );
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
$restoreIncludeArray = $oldRestoreIncludeArray_1fb7854983bac676b87aba62fd6761ed;


$setArray = $oldSetArray_b2b91d8c81968fb0d25312d42643075f;
$tpl->Level--;
?>
