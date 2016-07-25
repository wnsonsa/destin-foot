<?php
/**
 * Created by PhpStorm.
 * User: wnsonsa
 * Date: 24/05/16
 * Time: 20:26
 */

$module = $Params['Module'];

$http = eZHTTPTool::instance();
$tpl = eZTemplate::factory();
$error = null;
$create = false;
$current_user = eZUser::currentUser();
$managerINI = eZINI::instance("manager2.ini");

//verif if anonymous
if ('anonymous' == $current_user->attribute('login')) {
    $http->redirect('/profil/login');
    return true;
}

//récupération des données utilisateur
$joueur = $current_user->attribute('contentobject');
if (!$joueur instanceof eZContentObject) {
    $http->redirect('/profil/login');
    return true;
}

$attributesForm = [];
//var_dump($_POST);die();
if ($http->hasPostVariable('modify') && $http->postVariable('modify') == 'true') {
    if (
        empty($http->postVariable('nom')) ||
        empty($http->postVariable('prenom')) ||
        empty($http->postVariable('dateNaissance')) ||
        empty($http->postVariable('region'))
    ) {
        $error = "Veuillez remplir les champs obligatoires";
        //var_dump("true");die();
    } else {
        /*echo "<pre>";
        print_r ($_POST);
        echo "</pre>";
        die();*/

        /**
         * mise a jour joueur
         */
        $attributes = [];

        if ($http->hasPostVariable('nom') && !empty($http->postVariable('nom'))) {
            $attributes['nom'] = $http->postVariable('nom');
        }

        if ($http->hasPostVariable('prenom') && !empty($http->postVariable('prenom'))) {
            $attributes['prenom'] = $http->postVariable('prenom');
        }

        if ($http->hasPostVariable('dateNaissance') && !empty($http->postVariable('dateNaissance'))) {
            $dateNaissance = $http->postVariable('dateNaissance');
            $dateTemp = new DateTime($dateNaissance);
            $attributes['dateNaissance'] = $dateTemp->format('U');
        }

        if ($http->hasPostVariable('region') && !empty($http->postVariable('region'))) {
            $attributes['region'] = $http->postVariable('region');
        }

        if ($http->hasPostVariable('nationalite') && !empty($http->postVariable('nationalite'))) {
            $attributes['nationalite'] = $http->postVariable('nationalite');
        }

        if ($http->hasPostVariable('statut') && !empty($http->postVariable('statut'))) {
            $attributes['statut'] = $http->postVariable('statut');
        }

        if ($http->hasPostVariable('facebook') && !empty($http->postVariable('facebook'))) {
            $attributes['facebook'] = $http->postVariable('facebook');
        }

        if ($http->hasPostVariable('twitter') && !empty($http->postVariable('twitter'))) {
            $attributes['twitter'] = $http->postVariable('twitter');
        }

        if ($http->hasPostVariable('instagram') && !empty($http->postVariable('instagram'))) {
            $attributes['instagram'] = $http->postVariable('instagram');
        }

        if ($http->hasPostVariable('email') && !empty($http->postVariable('email'))) {
            $email = $http->postVariable('email');
        }

        if ($http->hasPostVariable('login') && !empty($http->postVariable('login'))) {
            $login = $http->postVariable('login');
        }

        if (
            !empty($http->postVariable('password1') &&
                !empty($http->postVariable('password2'))) &&
            $http->postVariable('password1') == $http->postVariable('password2') &&
            count($http->postVariable('password1')) > 5
        ) {
            $password = $http->postVariable('password1');
        }

        $params = array();
        $params['attributes'] = $attributes;
        $params['remote_id'] = $joueur->attribute('remote_id');
        $params['section_id'] = $joueur->attribute('section_id');

        $result = eZContentFunctions::updateAndPublishObject($joueur, $params);


        /**
         * mise a jour saison
         */

        $counter = 0;
        while (!empty($http->postVariable('saisonid_' . $counter))) {
            $attributes = [];
            $saisonid = $http->postVariable('saisonid_' . $counter);
            $saisonTemp = eZContentObject::fetch($saisonid);
            if (!$saisonTemp instanceof eZContentObject) {
                continue;
            }

            if ($http->hasPostVariable('saison_' . $counter) && !empty($http->postVariable('saison_' . $counter))) {
                $attributes['saison'] = $http->postVariable('saison_' . $counter);
            }
            if ($http->hasPostVariable('club_' . $counter) && !empty($http->postVariable('club_' . $counter))) {
                $attributes['club'] = $http->postVariable('club_' . $counter);
            }
            if ($http->hasPostVariable('categorie_' . $counter) && !empty($http->postVariable('categorie_' . $counter))) {
                $attributes['categorie'] = $http->postVariable('categorie_' . $counter);
            }
            if ($http->hasPostVariable('division_' . $counter) && !empty($http->postVariable('division_' . $counter))) {
                $attributes['division'] = $http->postVariable('division_' . $counter);
            }
            if ($http->hasPostVariable('poste_' . $counter) && !empty($http->postVariable('poste_' . $counter))) {
                $attributes['poste'] = $http->postVariable('poste_' . $counter);
            }
            if ($http->hasPostVariable('coach_' . $counter) && !empty($http->postVariable('coach_' . $counter))) {
                $attributes['coach'] = $http->postVariable('coach_' . $counter);
            }
            if ($http->hasPostVariable('selection_' . $counter) && !empty($http->postVariable('selection_' . $counter))) {
                $attributes['selection'] = $http->postVariable('selection_' . $counter);
            }
            if ($http->hasPostVariable('palmares_' . $counter) && !empty($http->postVariable('palmares_' . $counter))) {
                $attributes['palmares'] = $http->postVariable('palmares_' . $counter);
            }

            $params = array();
            $params['attributes'] = $attributes;
            $params['remote_id'] = $saisonTemp->attribute('remote_id');
            $params['section_id'] = $saisonTemp->attribute('section_id');

            $result = eZContentFunctions::updateAndPublishObject($saisonTemp, $params);
            $counter++;
        }

        while ($http->hasPostVariable('saisonid_' . $counter) && empty($http->postVariable('saisonid_' . $counter))) {
            $attributes = [];
            if ($http->hasPostVariable('saison_' . $counter) && !empty($http->postVariable('saison_' . $counter))) {
                $attributes['saison'] = $http->postVariable('saison_' . $counter);
            }
            if ($http->hasPostVariable('club_' . $counter) && !empty($http->postVariable('club_' . $counter))) {
                $attributes['club'] = $http->postVariable('club_' . $counter);
            }
            if ($http->hasPostVariable('categorie_' . $counter) && !empty($http->postVariable('categorie_' . $counter))) {
                $attributes['categorie'] = $http->postVariable('categorie_' . $counter);
            }
            if ($http->hasPostVariable('division_' . $counter) && !empty($http->postVariable('division_' . $counter))) {
                $attributes['division'] = $http->postVariable('division_' . $counter);
            }
            if ($http->hasPostVariable('poste_' . $counter) && !empty($http->postVariable('poste_' . $counter))) {
                $attributes['poste'] = $http->postVariable('poste_' . $counter);
            }
            if ($http->hasPostVariable('coach_' . $counter) && !empty($http->postVariable('coach_' . $counter))) {
                $attributes['coach'] = $http->postVariable('coach_' . $counter);
            }
            if ($http->hasPostVariable('selection_' . $counter) && !empty($http->postVariable('selection_' . $counter))) {
                $attributes['selection'] = $http->postVariable('selection_' . $counter);
            }
            if ($http->hasPostVariable('palmares_' . $counter) && !empty($http->postVariable('palmares_' . $counter))) {
                $attributes['palmares'] = $http->postVariable('palmares_' . $counter);
            }

            $params = array();
            $params['attributes'] = $attributes;
            $params['section_id'] = $joueur->attribute('section_id');
            $params['parent_node_id'] = $joueur->attribute('main_node_id');
            $params['class_identifier'] = 'saison';

            $result = eZContentFunctions::createAndPublishObject($params);
            $counter++;
            //var_dump($result);die();
        }

        //$joueurID       = $managerINI->variable("NodeIdSettings","joueurId");
        //$recruteurID    = $managerINI->variable("NodeIdSettings","recruteurId");

    }
}
//récupération attributs de joueur
$joueur = eZContentObject::fetch($joueur->attribute('id'));
$dataMapJoueur = $joueur->attribute('data_map');
foreach ($dataMapJoueur as $attributeName => $attributeValue) {
    switch ($attributeValue->attribute('data_type_string')) {
        case 'ezdate':
            $day = $attributeValue->attribute('content')->attribute('day');
            $month = $attributeValue->attribute('content')->attribute('month');
            $year = $attributeValue->attribute('content')->attribute('year');

            $attributesForm['dateNaissance'] = $year . '-' . $month . '-' . $day;
            break;

        case 'ezimage':
            $original = $attributeValue->attribute('content')->attribute('original');
            $attributesForm[$attributeName] = $original['url'];
            break;

        case 'ezuser':
            $attributesForm['email'] = $attributeValue->attribute('content')->attribute('email');
            $attributesForm['login'] = $attributeValue->attribute('content')->attribute('login');
            break;

        default:
            $attributesForm[$attributeName] = $attributeValue->attribute('content');
    }
    //var_dump($attributeValue->attribute('data_type_string'));
    //echo($attributeName . " ");echo($attributeValue->attribute('content') . "\n");
}

//récupération objet saison
$saisons = eZContentObjectTreeNode::subTreeByNodeID(
    array(
        'ClassFilterType' => 'include', // Filtre par liste blanche
        'ClassFilterArray' => array(
            'saison' // Le(s) type(s) d'objet(s) à récupérer
        ),
        'Depth' => 1, // Enfants directs du parent <=> à une profondeur de 1 sous le noeud n°67
        'SortBy' => array(array('published', true))
    ),
    $joueur->attribute('main_node_id') // Peut également être un array : array(67)
);

$attributesSaisonForm = [];
if (is_array($saisons) && count($saisons) > 0) {
    foreach ($saisons as $saison) {
        $attributesSaison = [];
        $dataMapSaison = $saison->attribute('data_map');
        $attributesSaison['object_id'] = $saison->attribute('contentobject_id');
        foreach ($dataMapSaison as $attributeName => $attributeValue) {
            $attributesSaison[$attributeName] = $attributeValue->attribute('content');
            //var_dump($attributeValue->attribute('data_type_string'));
            //echo($attributeName . " ");echo($attributeValue->attribute('content') . "\n");
        }
        $attributesSaisonForm[] = $attributesSaison;
    }
}

//var_dump($attributesForm);
//die();
$tpl->setVariable('error', $error);
$tpl->setVariable('attributesForm', $attributesForm);
$tpl->setVariable('attributesSaisonForm', $attributesSaisonForm);
$tpl->setVariable('create', $create);

$Result = array();
$Result['content'] = $tpl->fetch('design:profil/modifier.tpl');
$Result['ui_context'] = 'edit';
$Result['path'] = array();


//exit;