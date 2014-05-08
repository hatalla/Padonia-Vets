<?php
/**
 * @file
 * Goodnex's theme implementation to display a single Portfolio node.
 */
global $base_url; 
$image_slide = "";

if ($items = field_get_items('node', $node, 'field_portfolio_slider')) {
  if (count($items) == 1) {
    $image_slide = 'false';
  }
  elseif (count($items) > 1) {
    $image_slide = 'true';
  }
}

$img_count = 0;
$counter = count($items);

?>

<?php if($page): ?>
<div class="portfolio-controls <?php global $user; if ( user_is_logged_in() ) { echo "portfolio-controls-user"; } ?>">
  <?php if ( goodnex_node_pagination($node, 'p') != NULL ) : ?>
	  <a class="controls-prev" href="<?php print url('node/' . goodnex_node_pagination($node, 'p'), array('absolute' => TRUE)); ?>">Prev</a>
	<?php endif; ?>
	<a class="controls-all" href="<?php echo $base_url; ?>/services">all</a>
	<?php if ( goodnex_node_pagination($node, 'n') != NULL ) : ?>
	  <a class="controls-next" href="<?php print url('node/' . goodnex_node_pagination($node, 'n'), array('absolute' => TRUE)); ?>">Next</a>
	<?php endif; ?>  
</div><!--/ .portfolio-controls-->	
<?php endif; ?>

<?php if ( ($image_slide == 'true') ): ?>
  <div class="image-gallery-slider">
	  <ul>
	    <?php while ($img_count < $counter) { ?>
	      <li>
				  <div class="preloader">
						<a class="bwWrapper single-image plus-icon" href="<?php echo file_create_url($node->field_portfolio_slider['und'][$img_count]['uri']); ?>" rel="gallery">
									<img src="<?php echo file_create_url($node->field_portfolio_slider['und'][$img_count]['uri']); ?>" alt="" >
								</a>							
					</div>
	      </li>
		  <?php $img_count++; } ?>		
	  </ul>
  </div>    
<?php endif; ?>
		
<?php if ($image_slide == 'false'): ?>
  <div class="preloader">
		<a class="bwWrapper single-image link-icon" href="<?php print $node_url; ?>">
			<img src="<?php echo file_create_url($node->field_portfolio_slider['und'][0]['uri']); ?>" alt="" >
		</a>						
	</div>
<?php endif; ?>

<?php
  // Hide comments, tags, and links now so that we can render them later.
  hide($content['field_portfolio_slider']);
  hide($content['field_image']);
  hide($content['links']);
  hide($content['field_portfolio_category']);
  print render($content);
?>

<div class="clear"></div>
