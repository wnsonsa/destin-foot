<?php
// URI:       design:parts/path.tpl
// Filename:  extension/ezdemo/design/ezdemo/templates/parts/path.tpl
// Timestamp: 1463821099 (Sat May 21 10:58:19 CEST 2016)
$oldSetArray_d75bfcf4552cd3b066d7e26c12b8a819 = isset( $setArray ) ? $setArray : array();
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

$text .= '<!-- Path content: START -->
<div class="container">
    <ul class="breadcrumb">
    ';
// foreach begins
$skipDelimiter = true;
if ( !isset( $fe_variable_stack_2f462683b467a70e453eb7bf7bd7b4d4_17 ) ) $fe_variable_stack_2f462683b467a70e453eb7bf7bd7b4d4_17 = array();
$fe_variable_stack_2f462683b467a70e453eb7bf7bd7b4d4_17[] = compact( 'fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17', 'fe_array_keys_2f462683b467a70e453eb7bf7bd7b4d4_17', 'fe_n_items_2f462683b467a70e453eb7bf7bd7b4d4_17', 'fe_n_items_processed_2f462683b467a70e453eb7bf7bd7b4d4_17', 'fe_i_2f462683b467a70e453eb7bf7bd7b4d4_17', 'fe_key_2f462683b467a70e453eb7bf7bd7b4d4_17', 'fe_val_2f462683b467a70e453eb7bf7bd7b4d4_17', 'fe_offset_2f462683b467a70e453eb7bf7bd7b4d4_17', 'fe_max_2f462683b467a70e453eb7bf7bd7b4d4_17', 'fe_reverse_2f462683b467a70e453eb7bf7bd7b4d4_17', 'fe_first_val_2f462683b467a70e453eb7bf7bd7b4d4_17', 'fe_last_val_2f462683b467a70e453eb7bf7bd7b4d4_17' );
unset( $fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17 );
unset( $fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17 );
$fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'pagedata', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['pagedata'] : null;
$fe_array_2f462683b467a70e453eb7bf7bd7b4d4_171 = compiledFetchAttribute( $fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17, 'path_array' );
unset( $fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17 );
$fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17 = $fe_array_2f462683b467a70e453eb7bf7bd7b4d4_171;
if (! isset( $fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17 ) ) $fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17 = NULL;
while ( is_object( $fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17 ) and method_exists( $fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17, 'templateValue' ) )
    $fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17 = $fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17->templateValue();

$fe_array_keys_2f462683b467a70e453eb7bf7bd7b4d4_17 = is_array( $fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17 ) ? array_keys( $fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17 ) : array();
$fe_n_items_2f462683b467a70e453eb7bf7bd7b4d4_17 = count( $fe_array_keys_2f462683b467a70e453eb7bf7bd7b4d4_17 );
$fe_n_items_processed_2f462683b467a70e453eb7bf7bd7b4d4_17 = 0;
$fe_offset_2f462683b467a70e453eb7bf7bd7b4d4_17 = 0;
$fe_max_2f462683b467a70e453eb7bf7bd7b4d4_17 = $fe_n_items_2f462683b467a70e453eb7bf7bd7b4d4_17 - $fe_offset_2f462683b467a70e453eb7bf7bd7b4d4_17;
$fe_reverse_2f462683b467a70e453eb7bf7bd7b4d4_17 = false;
if ( $fe_offset_2f462683b467a70e453eb7bf7bd7b4d4_17 < 0 || $fe_offset_2f462683b467a70e453eb7bf7bd7b4d4_17 >= $fe_n_items_2f462683b467a70e453eb7bf7bd7b4d4_17 )
{
    $fe_offset_2f462683b467a70e453eb7bf7bd7b4d4_17 = ( $fe_offset_2f462683b467a70e453eb7bf7bd7b4d4_17 < 0 ) ? 0 : $fe_n_items_2f462683b467a70e453eb7bf7bd7b4d4_17;
    if ( $fe_n_items_2f462683b467a70e453eb7bf7bd7b4d4_17 || $fe_offset_2f462683b467a70e453eb7bf7bd7b4d4_17 < 0 )
 {
        eZDebug::writeWarning("Invalid 'offset' parameter specified: '$fe_offset_2f462683b467a70e453eb7bf7bd7b4d4_17'. Array count: $fe_n_items_2f462683b467a70e453eb7bf7bd7b4d4_17");   
}
}
if ( $fe_max_2f462683b467a70e453eb7bf7bd7b4d4_17 < 0 || $fe_offset_2f462683b467a70e453eb7bf7bd7b4d4_17 + $fe_max_2f462683b467a70e453eb7bf7bd7b4d4_17 > $fe_n_items_2f462683b467a70e453eb7bf7bd7b4d4_17 )
{
    if ( $fe_max_2f462683b467a70e453eb7bf7bd7b4d4_17 < 0 )
 eZDebug::writeWarning("Invalid 'max' parameter specified: $fe_max_2f462683b467a70e453eb7bf7bd7b4d4_17");
    $fe_max_2f462683b467a70e453eb7bf7bd7b4d4_17 = $fe_n_items_2f462683b467a70e453eb7bf7bd7b4d4_17 - $fe_offset_2f462683b467a70e453eb7bf7bd7b4d4_17;
}
if ( $fe_reverse_2f462683b467a70e453eb7bf7bd7b4d4_17 )
{
    $fe_first_val_2f462683b467a70e453eb7bf7bd7b4d4_17 = $fe_n_items_2f462683b467a70e453eb7bf7bd7b4d4_17 - 1 - $fe_offset_2f462683b467a70e453eb7bf7bd7b4d4_17;
    $fe_last_val_2f462683b467a70e453eb7bf7bd7b4d4_17  = 0;
}
else
{
    $fe_first_val_2f462683b467a70e453eb7bf7bd7b4d4_17 = $fe_offset_2f462683b467a70e453eb7bf7bd7b4d4_17;
    $fe_last_val_2f462683b467a70e453eb7bf7bd7b4d4_17  = $fe_n_items_2f462683b467a70e453eb7bf7bd7b4d4_17 - 1;
}
// foreach
for ( $fe_i_2f462683b467a70e453eb7bf7bd7b4d4_17 = $fe_first_val_2f462683b467a70e453eb7bf7bd7b4d4_17; $fe_n_items_processed_2f462683b467a70e453eb7bf7bd7b4d4_17 < $fe_max_2f462683b467a70e453eb7bf7bd7b4d4_17 && ( $fe_reverse_2f462683b467a70e453eb7bf7bd7b4d4_17 ? $fe_i_2f462683b467a70e453eb7bf7bd7b4d4_17 >= $fe_last_val_2f462683b467a70e453eb7bf7bd7b4d4_17 : $fe_i_2f462683b467a70e453eb7bf7bd7b4d4_17 <= $fe_last_val_2f462683b467a70e453eb7bf7bd7b4d4_17 ); $fe_reverse_2f462683b467a70e453eb7bf7bd7b4d4_17 ? $fe_i_2f462683b467a70e453eb7bf7bd7b4d4_17-- : $fe_i_2f462683b467a70e453eb7bf7bd7b4d4_17++ )
{
$fe_key_2f462683b467a70e453eb7bf7bd7b4d4_17 = $fe_array_keys_2f462683b467a70e453eb7bf7bd7b4d4_17[$fe_i_2f462683b467a70e453eb7bf7bd7b4d4_17];
$fe_val_2f462683b467a70e453eb7bf7bd7b4d4_17 = $fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17[$fe_key_2f462683b467a70e453eb7bf7bd7b4d4_17];
$vars[$rootNamespace]['path'] = $fe_val_2f462683b467a70e453eb7bf7bd7b4d4_17;
$text .= '    ';
// if begins
unset( $if_cond );
unset( $if_cond );
$if_cond = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'path', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['path'] : null;
$if_cond1 = compiledFetchAttribute( $if_cond, 'url' );
unset( $if_cond );
$if_cond = $if_cond1;
if (! isset( $if_cond ) ) $if_cond = NULL;
while ( is_object( $if_cond ) and method_exists( $if_cond, 'templateValue' ) )
    $if_cond = $if_cond->templateValue();

if ( $if_cond )
{
$text .= '        <li>
            <a href=';
unset( $var );
unset( $var1 );
unset( $var2 );
unset( $var3 );
unset( $var3 );
$var3 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'path', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['path'] : null;
$var4 = compiledFetchAttribute( $var3, 'url_alias' );
unset( $var3 );
$var3 = $var4;
if (! isset( $var3 ) ) $var3 = NULL;
while ( is_object( $var3 ) and method_exists( $var3, 'templateValue' ) )
    $var3 = $var3->templateValue();
while ( is_object( $var3 ) and method_exists( $var3, 'templateValue' ) )
    $var3 = $var3->templateValue();
$var2 = isset( $var3 );unset( $var3 );
if (! isset( $var2 ) ) $var2 = NULL;
while ( is_object( $var2 ) and method_exists( $var2, 'templateValue' ) )
    $var2 = $var2->templateValue();
if ( $var2 )
{
    unset( $var3 );
unset( $var3 );
$var3 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( "path", $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]["path"] : null;
$var4 = compiledFetchAttribute( $var3, "url_alias" );
unset( $var3 );
$var3 = $var4;
if (! isset( $var3 ) ) $var3 = NULL;
while ( is_object( $var3 ) and method_exists( $var3, 'templateValue' ) )
    $var3 = $var3->templateValue();
while ( is_object( $var3 ) and method_exists( $var3, 'templateValue' ) )
    $var3 = $var3->templateValue();

    $var1 = $var3;
}
else
{
    unset( $var4 );
unset( $var4 );
$var4 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( "path", $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]["path"] : null;
$var5 = compiledFetchAttribute( $var4, "url" );
unset( $var4 );
$var4 = $var5;
if (! isset( $var4 ) ) $var4 = NULL;
while ( is_object( $var4 ) and method_exists( $var4, 'templateValue' ) )
    $var4 = $var4->templateValue();
while ( is_object( $var4 ) and method_exists( $var4, 'templateValue' ) )
    $var4 = $var4->templateValue();

    $var1 = $var4;
}
unset( $var2, $var3, $var4 );
if (! isset( $var1 ) ) $var1 = NULL;
while ( is_object( $var1 ) and method_exists( $var1, 'templateValue' ) )
    $var1 = $var1->templateValue();

eZURI::transformURI( $var1, false, eZURI::getTransformURIMode() );
$var1 = '"' . $var1 . '"';
$var = $var1;
unset( $var1 );
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
$text .= $var;
unset( $var );

$text .= '>';
unset( $var );
unset( $var1 );
unset( $var1 );
$var1 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'path', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['path'] : null;
$var2 = compiledFetchAttribute( $var1, 'text' );
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

$text .= '</a> <span class="divider">&raquo;</span>
        </li>
    ';
}
else
{
$text .= '        <li class="active">
            ';
unset( $var );
unset( $var1 );
unset( $var1 );
$var1 = ( array_key_exists( $rootNamespace, $vars ) and array_key_exists( 'path', $vars[$rootNamespace] ) ) ? $vars[$rootNamespace]['path'] : null;
$var2 = compiledFetchAttribute( $var1, 'text' );
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

$text .= '
        </li>
    ';
}
unset( $if_cond );
// if ends

$text .= '    ';
$fe_n_items_processed_2f462683b467a70e453eb7bf7bd7b4d4_17++;
} // foreach
$skipDelimiter = false;
if ( count( $fe_variable_stack_2f462683b467a70e453eb7bf7bd7b4d4_17 ) ) extract( array_pop( $fe_variable_stack_2f462683b467a70e453eb7bf7bd7b4d4_17 ) );

else
{

unset( $fe_array_2f462683b467a70e453eb7bf7bd7b4d4_17 );

unset( $fe_array_keys_2f462683b467a70e453eb7bf7bd7b4d4_17 );

unset( $fe_n_items_2f462683b467a70e453eb7bf7bd7b4d4_17 );

unset( $fe_n_items_processed_2f462683b467a70e453eb7bf7bd7b4d4_17 );

unset( $fe_i_2f462683b467a70e453eb7bf7bd7b4d4_17 );

unset( $fe_key_2f462683b467a70e453eb7bf7bd7b4d4_17 );

unset( $fe_val_2f462683b467a70e453eb7bf7bd7b4d4_17 );

unset( $fe_offset_2f462683b467a70e453eb7bf7bd7b4d4_17 );

unset( $fe_max_2f462683b467a70e453eb7bf7bd7b4d4_17 );

unset( $fe_reverse_2f462683b467a70e453eb7bf7bd7b4d4_17 );

unset( $fe_first_val_2f462683b467a70e453eb7bf7bd7b4d4_17 );

unset( $fe_last_val_2f462683b467a70e453eb7bf7bd7b4d4_17 );

unset( $fe_variable_stack_2f462683b467a70e453eb7bf7bd7b4d4_17 );

}

// foreach ends
$text .= '    </ul>
</div>
<!-- Path content: END -->
';

$setArray = $oldSetArray_d75bfcf4552cd3b066d7e26c12b8a819;
$tpl->Level--;
?>
