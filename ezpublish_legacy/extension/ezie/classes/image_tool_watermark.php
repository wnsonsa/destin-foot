<?php
/**
 * File containing the eZIEImageToolWatermark class.
 *
 * @copyright Copyright (C) eZ Systems AS.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 * @version 2014.11.1
 * @package ezie
 */
class eZIEImageToolWatermark extends eZIEImageAction
{
    /**
     * Watermark filter.
     * Adds the $image watermark at the $region location
     *
     * @param  array $region array with 'x' and 'y' keys
     * @param  string $image Image file name, will be searched in the ezie design folder
     * @return array(ezcImageFilter)s
     */
    public static function filter( $region, $image )
    {
        // the watermark images are in ezie/design/standard/images/watermarks
        // @todo use ini file for image paths instead
        $img_path = realpath( dirname( __FILE__ ) . "/../design/standard/images/watermarks" ) . "/" . $image;

        // retrieve image dimensions
        $analyzer = new ezcImageAnalyzer( $img_path );

        // percentage of the watermark original size to use
        $pc = $region['w'] / $analyzer->data->width;

        return array(
            new ezcImageFilter(
                'watermarkAbsolute',
                array(
                    'image'  => $img_path,
                    'posX'   => $region['x'],
                    'posY'   => $region['y'],
                    'width'  => intval( $region['w'] ),
                    'height' => intval( $region['h'] )
                )
            )
        );
    }
}
?>