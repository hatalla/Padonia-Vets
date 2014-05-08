<?php
$image_slide = "";

if ($items = field_get_items('node', $node, 'field_image')) {
  if (count($items) == 1) {
    $image_slide = 'false';
  }
  elseif (count($items) > 1) {
    $image_slide = 'true';
  }
}
 
?>

<div class="item">

	<?php if ( ($image_slide == 'true') ): ?>
	  <div class="image-post-slider">
		  <ul>
			  <?php if (render($content['field_image'])) : ?>
			    <?php print render($content['field_image']); ?>
			  <?php endif; ?>
		  </ul>  
		</div>
	<?php endif; ?>
			
	<?php if ($image_slide == 'false'): ?>
	  <div class="preloader">
			<a class="bwWrapper single-image link-icon" href="<?php print $node_url; ?>">
				<img src="<?php echo file_create_url($node->field_image['und'][0]['uri']); ?>" alt="" >
			</a>						
		</div>
	<?php endif; ?>
	
	<?php if (render($content['field_before_title'])) : ?>
	  
	    <?php print render($content['field_before_title']); ?>

	<?php endif; ?>

	<h6 class="title"><a href="<?php echo $node_url; ?>"><?php echo $title; ?></a></h6>

	<div class="entry-meta">
		<?php if ( theme_get_setting('meta_date') == '1' ) : ?><span class="date"><?php print format_date($node->created, 'custom', 'M d, Y'); ?></span><?php endif; ?>
		<?php if ( theme_get_setting('meta_comments') == '1' ) : ?><span class="comments"><a href="<?php print $node_url;?>/#comments"><?php print $comment_count; ?> comment<?php if ($comment_count != "1" ) { echo "s"; } ?></a></span><?php endif; ?>
	</div><!--/ .entry-meta-->

	<div class="entry-body">

		<?php
      $teaser = strip_tags(render($content['body']));
      echo substr($teaser, 0, 100)."...";
    ?>
	
	</div><!--/ .entry-body-->

</div><!--/ .item-->