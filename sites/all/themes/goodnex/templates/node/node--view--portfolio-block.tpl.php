<?php
$search = array(' ', '-');
$replace = array(' / ', ' ');
$cat = str_replace($search, $replace, strip_tags(render($content['field_portfolio_category'])));
$replacement = " ";
?>

<article class="<?php echo theme_get_setting('portfolio_columns');?>" data-categories="<?php print strip_tags(render($content['field_portfolio_category'])); ?>">

  <?php if (render($content['field_image'])): ?>  
	<div class="preloader">
		<a class="bwWrapper single-image plus-icon" href="<?php echo file_create_url($node->field_image['und'][0]['uri']); ?>" rel="folio" title="">
			<img src="<?php echo file_create_url($node->field_image['und'][0]['uri']); ?>" alt="" >
		</a>							
	</div><!--/ .preloader-->
	<?php endif; ?>

	<a class="project-meta" href="<?php echo $node_url; ?>">

		<h6 class="title"><?php print $title ;?></h6>
		<span class="categories"><?php print substr($cat, 0, -2).$replacement; ?></span>

	</a><!--/ .project-meta-->						

</article><!--/ .columns-->