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

if ( $http->hasPostVariable('register') && $http->postVariable('register') == 'true' ) {
    if (
        empty($http->postVariable('nom')) ||
        empty($http->postVariable('prenom')) ||
        empty($http->postVariable('dateNaissance')) ||
        empty($http->postVariable('region')) ||
        empty($http->postVariable('profil')) ||
        empty($_FILES['photo']) ||
        empty($http->postVariable('email')) ||
        empty($http->postVariable('login')) ||
        empty($http->postVariable('password1')) ||
        empty($http->postVariable('password2') )
    ) {
        $error = true;
        //var_dump("true");die();
    }
    else {
        //var_dump($_FILES['photo']);die();
        $managerINI     = eZINI::instance("manager2.ini");

//        $groupJoueurId       = $managerINI->variable("NodeIdSettings","groupJoueurId");
//        $groupRecruteurId    = $managerINI->variable("NodeIdSettings","groupRecruteurId");
        
        $nom            = $http->postVariable('nom');
        $prenom         = $http->postVariable('prenom');
        $dateNaissance  = $http->postVariable('dateNaissance');
        $dateTemp       = new DateTime($dateNaissance);
        $dateNaissance  = $dateTemp->format('U');
        $region         = $http->postVariable('region');
        $profil         = $http->postVariable('profil');
        $photo          = $_FILES['photo']['tmp_name'];
        $email          = $http->postVariable('email');
        $login          = $http->postVariable('login');
        $password       = $http->postVariable('password1');
        $create         = false;
//var_dump($dateNaissance);die();
        $paramsCeate = [];
        if ( "joueur" == $profil) {
            $paramsCeate['class_identifier'] = 'joueur';
            $groupUserId       = $managerINI->variable("NodeIdSettings","groupJoueurId");
            $profilId       = $managerINI->variable("NodeIdSettings","joueurId");
            $paramsCeate['parent_node_id']   = $groupUserId;
            $create = true;
            //var_dump($profilId);
        }
        elseif ("recruteur" == $profil) {
            $paramsCeate['class_identifier'] = 'recruteur';
            $groupUserId       = $managerINI->variable("NodeIdSettings","groupRecruteurId");
            $profilId       = $managerINI->variable("NodeIdSettings","recruteurId");
            $paramsCeate['parent_node_id']   = $groupUserId;
            $create = true;
        }

        $checkLogin = eZUser::fetchByName($login);
        $checkEmail = eZUser::fetchByEmail($email);

        if ( true == $create && !$checkLogin instanceof eZPersistentObject && !$checkEmail instanceof eZPersistentObject) {
            $attributes = array();
            $attributes['nom'] = $nom;
            $attributes['prenom'] = $prenom;
            $attributes['date_naissance'] = $dateNaissance;
            $attributes['region'] = $region;
            $attributes['profil'] = $profil;
            $attributes['photo'] = $photo;

            $attributes['user_account'] = $login . '|' . $email . '|' . md5($password) . '|md5_password|1';
            $paramsCeate['creator_id'] = 14; // admin user id

            $paramsCeate['attributes'] = $attributes;

            $userObject = eZContentFunctions::createAndPublishObject($paramsCeate);

            if ($userObject instanceof eZContentObject) {
                $newNode = $userObject->addLocation($profilId);
                $newNode->updateSubTreePath();
                $newNode->setAttribute( 'contentobject_is_published', 1 );
                $newNode->sync();
                /*$objectID = $userObject->attribute('id');
                $nodeAssignment = eZNodeAssignment::create( array(
                        'contentobject_id' => $userObject->attribute( 'id' ),
                        'contentobject_version' => $userObject->attribute( 'current_version' ),
                        'parent_node' => $profilId,
                        'is_main' => 0
                    )
                );*/
            }
            else{
                var_dump('FAUX');
            }
            

            //var_dump($result);die();
        }
        else{
            $error = "Cet email∕login est déjà utilisé.";
        }
    }
}
else {
//var_dump('else');die();
}

$tpl->setVariable('error',$error);
$tpl->setVariable('post',$_POST);
$tpl->setVariable('create',$create);

$Result = array();
$Result['content']    = $tpl->fetch( 'design:profil/creer.tpl' );
$Result['ui_context'] = 'edit';
$Result['path']       = array();


//exit;