{def $aContentsExclude = array()}
<div class="container">
    <div class="row">
        <div class="col-lg-2 well">
            <div id="left-side-menu" class="container">
                <div class="row">
                    <div class="col-sm-12 col-lg-12 text-center">
                        <div class="thumbnail" style="margin-bottom:5px;">
                            <img src="{'noavatar.png'|ezimage('no')}" class="img-rounded"/>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-12 text-center" style="margin-bottom:5px;">
                        <span class="label label-warning">Recruteur</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-lg-12 text-center">
                        {if $node.data_map.facebook.has_content}
                            <a href="{$node.data_map.facebook.content}" style="float:left; margin-right: 5px;"><img
                                        src="{'facebook.png'|ezimage('no')}" class="img-responsive" width="20"/></a>
                        {/if}
                        {if $node.data_map.twitter.has_content}
                            <a href="{$node.data_map.twitter.content}" style="float:left; margin-right: 5px;"><img
                                        src="{'twitter.png'|ezimage('no')}" class="img-responsive" width="20"/></a>
                        {/if}
                        {if $node.data_map.instagram.has_content}
                            <a href="{$node.data_map.instagram.content}" style="float:left;"><img
                                        src="{'instagram.png'|ezimage('no')}" class="img-responsive" width="20"/></a>
                        {/if}
                    </div>
                </div>
                <hr style="height:1px;border:none;color:#333;background-color:#333;">
                <div class="row">
                    <div class="col-sm-12 col-lg-12 text-center">
                        <h4>Followers</h4>
                        <p class="lead">65</p>
                        <p class="lead">
                            <button type="button" class="btn btn-primary">suivre</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-10">
            <div class="well">
                <h1>{$node.data_map.prenom.content} {$node.data_map.nom.content} </h1>
                {if $node.data_map.date_naissance.has_content}
                    <p><strong>Date de naissance :</strong> {$node.data_map.date_naissance.content.day}
                        /{$node.data_map.date_naissance.content.month}/{$node.data_map.date_naissance.content.year}</p>
                {/if}
                {if $node.data_map.poste.has_content}
                    <p><strong>Poste :</strong> {$node.data_map.poste.content}</p>
                {/if}
                {if $node.data_map.nationalite.has_content}
                    <p><strong>Nationalité :</strong> {$node.data_map.nationalite.content}</p>
                {/if}
                {if $node.data_map.statut.has_content}
                    <p><strong>Statut :</strong> {$node.data_map.statut.content}</p>
                {/if}
                {def $saisons = fetch('content','list', hash('parent_node_id', $node.node_id,
                'class_filter_type','include',
                'class_filter_array',array('saison')
                )
                )}
                {if count($saisons)|gt(0)}
                    <p><a href="#modal-display-saisons" data-toggle="modal">voir le parcours sportifs</a></p>
                {/if}
            </div>
        </div>
        {* stats *}
        <div class="col-lg-10 pull-right">
            <div class="well">
                <h2>Stats</h2>
                <p>TODO</p>
            </div>
        </div>
        {def $videos = fetch('content','list',hash('parent_node_id',$node.node_id,
        'class_filter_type', 'include',
        'class_filter_array', array('video'),
        'sort_by', array( 'published', false() ),
        'limit',1))}
        {def $total_items = fetch('content','list_count',hash('parent_node_id',$node.node_id,
        'class_filter_type', 'include',
        'class_filter_array', array('video'),
        ))}
        {if count($videos)|gt(0)}
            <div class="col-lg-10 pull-right">
                <div class="panel panel-default">
                    <div class="panel-heading text-center">
                        <h3>Vidéos</h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <p>
                                    {def $video = $videos[0]}
                                    {set $aContentsExclude = $aContentsExclude|append($video.contentobject_id)}
                                    {def $video_path = concat( '/content/download/', $video.data_map.file.contentobject_id, '/', $video.data_map.file.id, '/', $video.data_map.file.content.original_filename )|ezurl( 'no', 'full' )}

                                    {ezcss_require( 'video.css' )}
                                    {ezscript_require( 'video.js' )}
                                    <script>
                                        _V_.options.flash.swf = "{'flash/video-js.swf'|ezdesign( 'no' )}"
                                    </script>
                                    <figure id="gallery-viewer-video-{$video.node_id}" {if $is_hidden}class="hidden"
                                            {else}class="visible"{/if}>
                                        <video id="video_{$video.node_id}" class="video-js vjs-default-skin" controls
                                               preload="auto" width="500" height="400" poster=""
                                               data-setup="{ldelim}{rdelim}">
                                            <source src="{$video_path}" type="video/mp4"/>
                                        </video>
                                        <figcaption>
                                            <h3>
                                                <a href={$video.url_alias|ezurl}>{$video.name|wash()}</a>
                                            </h3>
                                            <div>
                                                {if $video.data_map.caption.has_content}
                                                    {attribute_view_gui attribute=$video.data_map.caption}
                                                {/if}
                                            </div>
                                        </figcaption>
                                    </figure>
                                    {undef $video_path}

                                </p>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <p class="text-right"><a class="btn btn-info" href="{$video.url_alias|ezurl(no)}">Toutes
                                        les vidéos</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
        {def $images = fetch('content','list',hash('parent_node_id',$node.node_id,
        'class_filter_type', 'include',
        'class_filter_array', array('image'),
        'sort_by', array( 'published', false() ),
        'limit',4))}
        {set $total_items = fetch('content','list_count',hash('parent_node_id',$node.node_id,
        'class_filter_type', 'include',
        'class_filter_array', array('image'),
        ))}
        {if count($images)|gt(0)}
            {def $image = $images[0]}
            {set $aContentsExclude = $aContentsExclude|append($image.contentobject_id)}
            <div class="col-lg-10 pull-right">
                <div class="panel panel-default">
                    <div class="panel-heading text-center">
                        <h3>Photo</h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="thumbnail">
                                    <img class="img-responsive"
                                         src="{$image.data_map.image.content.original.url|ezurl(no)}" alt="post image">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <h3 class=""><a href="{$image.url_alias|ezurl(no)}">{$image.data_map.name.content}</a>
                                </h3>
                                {*<p class=" clearfix">
                                    <i class="fa-icon-comment"></i>
                                    <a href="#">3 Comments</a>
                                    | <i class="fa-icon-share"></i>
                                    <a href="#">39 Shares</a> | <i class="fa-icon-user"></i>
                                    Post by: <a href="#">Admin</a> | Tags:
                                    <a href="#"><span class="label label-info">Bootstraptor</span></a>
                                    <a href="#"><span class="label label-info">Bootstrap</span></a>
                                    <a href="#"><span class="label label-info">UI</span></a>
                                    <a href="#"><span class="label label-info">growth</span></a>
                                </p>*}
                                <p>{$image.data_map.caption.content.output.output_text}</p>
                                <p class="text-right"><a class="btn btn-info" href="{$image.url_alias|ezurl(no)}">View
                                        details</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}

        {* all content videos, photos and artiles *}

        {def $allPosts = fetch('content','list',hash('parent_node_id',$node.node_id,
        'class_filter_type', 'include',
        'class_filter_array', array('image','video','blog_post'),
        'sort_by', array( 'published', false() ),
        'limit',10))}
        {if count($allPosts)|gt(0)}
            <div class="col-lg-10 pull-right">
                <div class="panel panel-default">
                    <div class="panel-body">
                        {foreach $allPosts as $post}
                            {if $aContentsExclude|contains($post.contentobject_id)}
                                {continue}
                            {/if}
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div class="thumbnail">
                                    <!-- IMAGE CONTAINER-->
                                    {if $post.data_map.image.has_content}
                                        <img class="img-responsive"
                                             src="{$post.data_map.image.content.original.url|ezurl(no)}"
                                             alt="post image" height="236">
                                    {/if}
                                    <!--END IMAGE CONTAINER-->
                                    <!-- CAPTION -->
                                    <div class="caption">
                                        <h3 class="">{$post.name}</h3>
                                        {if and(is_set($post.data_map.body),post.data_map.body.has_content)}
                                            <p class="">{$post.data_map.body.content.output.output_text|shorten(150)}</p>
                                        {elseif and(is_set($post.data_map.caption),post.data_map.caption.has_content)}
                                            <p class="">{$post.data_map.caption.content.output.output_text|shorten(150)}</p>
                                        {/if}
                                        <p>
                                            <a class="" href="{$post.url_alias|ezurl(no)}" title="">lire la suite</a>
                                        </p>
                                    </div>
                                    <!--END CAPTION -->
                                </div>
                                <!-- END: THUMBNAIL -->
                            </div>
                        {/foreach}
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <p class="text-right"><a class="btn btn-info" href="{'/archives/articles'|ezurl(no)}">Toutes les
                                posts</a></p>
                    </div>
                </div>
            </div>
        {/if}
        {* facebook comment *}
        <div class="col-lg-10 pull-right">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div id="fb-root"></div>
                    {literal}
                        <script>(function (d, s, id) {
                                var js, fjs = d.getElementsByTagName(s)[0];
                                if (d.getElementById(id)) return;
                                js = d.createElement(s);
                                js.id = id;
                                js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.7&appId=598332216986854";
                                fjs.parentNode.insertBefore(js, fjs);
                            }(document, 'script', 'facebook-jssdk'));</script>
                    {/literal}
                    <div class="fb-comments" data-href="{$node.url_alias|ezurl(no,'full')}" data-width="900"
                         data-numposts="10"></div>

                </div>
            </div>
        </div>
    </div>
</div>
{include uri="design:popin/modal_saison.tpl" saisons=$saisons}
