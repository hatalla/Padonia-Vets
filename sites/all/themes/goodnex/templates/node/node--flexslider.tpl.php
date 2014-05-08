<?php
/**
 * @file node--flexslider.tpl.php
 * Goodnex's node template for the Image Slider content type.
 */
 
?>

<li>
  <?php if (render($content['field_image'])): ?>  
  <div class="preloader">
    <a href="<?php print render($content['field_url']); ?>" class="bwWrapper"><img src="<?php echo file_create_url($node->field_image['und'][0]['uri']); ?>"></a>
	</div>
	<?php endif; ?>
	<section class="caption">
		<?php print render($content['field_caption']); ?>
	</section>
</li>