<?php
// URI:       extension/ezdemo/design/ezdemo/templates/page_header_logo.tpl
// Filename:  extension/ezdemo/design/ezdemo/templates/page_header_logo.tpl
// Timestamp: 1463821099 (Sat May 21 10:58:19 CEST 2016)
$oldSetArray_d061d398d04914903acf7e73a33fe297 = isset( $setArray ) ? $setArray : array();
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

$text .= '<div class="span8">
    <a href="/fre" title="';
unset( $var );
$var = 'eZ Publish Demo Site' ;
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
$text .= $var;
unset( $var );

$text .= '" class="logo"><img src="/extension/ezdemo/design/ezdemo/images/logo-ez.png" alt="';
unset( $var );
$var = 'eZ Publish Demo Site' ;
if (! isset( $var ) ) $var = NULL;
while ( is_object( $var ) and method_exists( $var, 'templateValue' ) )
    $var = $var->templateValue();
$text .= $var;
unset( $var );

$text .= '" /></a>
</div>
';

$setArray = $oldSetArray_d061d398d04914903acf7e73a33fe297;
$tpl->Level--;
?>
