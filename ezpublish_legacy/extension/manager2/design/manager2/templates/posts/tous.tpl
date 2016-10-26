####################
{if count($articles)|gt(0)}
<div class="articles-grid row">
{foreach $articles as $item}
    {$item.data_map|attribute(show,1)}
    <!-- ITEM -->
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div class="thumbnail">
            <!-- IMAGE CONTAINER-->
            <img class="img-responsive" src="{$item.data_map.image.content.}" alt="post image">
            <!--END IMAGE CONTAINER-->
            <!-- CAPTION -->
            <div class="caption">
                <h3 class="">Article title</h3>
                <p class="">This project presents beautiful style graphic &amp; design. VERSO provides modern features</p>
                <p>
                    <a class="" href="#" title="">Read more &gt;</a>
                </p>
            </div>
            <!--END CAPTION -->
        </div>
        <!-- END: THUMBNAIL -->
    </div>
    <!-- END ITEM -->
{/foreach}
    <!-- ITEM -->
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div class="thumbnail">
            <!-- IMAGE CONTAINER-->
            <img class="img-responsive" src="images/thumb.png" alt="post image">
            <!--END IMAGE CONTAINER-->
            <!-- CAPTION -->
            <div class="caption">
                <h3 class="">Article title</h3>
                <p class="">This project presents beautiful style graphic &amp; design. VERSO provides modern features</p>
                <p>
                    <a class="" href="#" title="">Read more &gt;</a>
                </p>
            </div>
            <!--END CAPTION -->
        </div>
        <!-- END: THUMBNAIL -->
    </div>
    <!-- END ITEM -->

    <!-- ITEM -->
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div class="thumbnail">
            <!-- IMAGE CONTAINER-->
            <img class="img-responsive" src="images/thumb.png" alt="post image">
            <!--END IMAGE CONTAINER-->
            <!-- CAPTION -->
            <div class="caption">
                <h3 class="">Article title</h3>
                <p class="">This project presents beautiful style graphic &amp; design. VERSO provides modern features</p>
                <p>
                    <a class="" href="#" title="">Read more &gt;</a>
                </p>
            </div>
            <!--END CAPTION -->
        </div>
        <!-- END: THUMBNAIL -->
    </div>
    <!-- END ITEM -->

    <!-- ITEM -->
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div class="thumbnail">
            <!-- IMAGE CONTAINER-->
            <img class="img-responsive" src="images/thumb.png" alt="post image">
            <!--END IMAGE CONTAINER-->
            <!-- CAPTION -->
            <div class="caption">
                <h3 class="">Article title</h3>
                <p class="">This project presents beautiful style graphic &amp; design. VERSO provides modern features</p>
                <p>
                    <a class="" href="#" title="">Read more &gt;</a>
                </p>
            </div>
            <!--END CAPTION -->
        </div>
        <!-- END: THUMBNAIL -->
    </div>
    <!-- END ITEM -->

</div>
{/if}