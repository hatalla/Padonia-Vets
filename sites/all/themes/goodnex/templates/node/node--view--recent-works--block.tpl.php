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
		<span class="categories"><?php print str_replace(' ', ' / ', strip_tags(render($content['field_portfolio_category']))); ?></span>	
	</a>
</li>