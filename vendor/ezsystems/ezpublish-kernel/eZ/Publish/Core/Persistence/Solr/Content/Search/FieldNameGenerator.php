<?php
/**
 * File containing the Content Search FieldNameGenerator class
 *
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 * @version 2014.11.1
 */

namespace eZ\Publish\Core\Persistence\Solr\Content\Search;

use eZ\Publish\SPI\Search\FieldType;

/**
 * Generator for Solr field names
 */
class FieldNameGenerator
{
    /**
     * Simple mapping for our internal field types
     *
     * We implement this mapping, because those dynamic fields are common to
     * Solr configurations.
     *
     * @var array
     */
    protected $fieldNameMapping = array(
        "ez_integer"  => "i",
        "ez_id"       => "id",
        "ez_mid"      => "mid",
        "ez_string"   => "s",
        "ez_mstring"  => "ms",
        "ez_long"     => "l",
        "ez_text"     => "t",
        "ez_html"     => "h",
        "ez_boolean"  => "b",
        "ez_mboolean" => "mb",
        "ez_float"    => "f",
        "ez_double"   => "d",
        "ez_date"     => "dt",
        "ez_point"    => "p",
        "ez_currency" => "c",
        "ez_geolocation" => "gl",
    );

    /**
     * Get name for Solr document field
     *
     * Consists of a name, and optionally field name and a content type name.
     *
     * @param string $name
     * @param string $field
     * @param string $type
     *
     * @return string
     */
    public function getName( $name, $field = null, $type = null )
    {
        return implode( '_', array_filter( array( $type, $field, $name ) ) );
    }

    /**
     * Map field type
     *
     * For Solr indexing the following scheme will always be used for names:
     * {name}_{type}.
     *
     * Using dynamic fields this allows to define fields either depending on
     * types, or names.
     *
     * Only the field with the name ID remains untouched.
     *
     * @param string $name
     * @param FieldType $type
     *
     * @return string
     */
    public function getTypedName( $name, FieldType $type )
    {
        if ( $name === "id" )
        {
            return $name;
        }

        $typeName = $type->type;
        if ( isset( $this->fieldNameMapping[$typeName] ) )
        {
            $typeName = $this->fieldNameMapping[$typeName];
        }

        return $name . '_' . $typeName;
    }
}

