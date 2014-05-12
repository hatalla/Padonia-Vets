<li class="four columns">
  <?php if (render($content['field_image'])): ?>  
	<div class="preloader">
		<a href="<?php echo file_create_url($node->field_image['und'][0]['uri']); ?>" class="bwWrapper single-image plus-icon" rel="jcarousel"> 
			<img src="<?php echo file_create_url($node->field_image['und'][0]['uri']); ?>" alt="" />
		</a>	
	</div><!--/ .preloader-->
	<?php endif; ?>			
	<a href="<?php echo $node_url; ?>" class="project-meta">
		<h6 class="title"><?php echo $title; ?></h6>
		<?php
			$search = array(' ', '-');
			$replace = array(' / ', ' ');
			$cat = str_replace($search, $replace, strip_tags(render($content['field_portfolio_category'])));
			$replacement = " ";
		?>
		<!--<span class="categories"><?php print str_replace(' ', ' / ', strip_tags(render($content['field_portfolio_category']))); ?></span>  -->
		<span class="categories"><?php print substr($cat, 0, -2).$replacement; ?></span>	
	</a>
</li>

