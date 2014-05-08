<div class="four columns">
  <a target="_self" href="<?php print render($content['field_detail_url']); ?>">
		<div class="detail-box">
	
			<div class="detail-entry">
	
				<i class="detail-icon <?php print render($content['field_detail_icon']); ?>"></i>
	
				<h5><?php print render($content['field_detail_caption']); ?></h5>
	
				<p>
					<?php print render($content['field_detail_info']); ?>
				</p>
	
			</div><!--/ .detail-entry-->
	
			<div data-color-state="<?php if ( (render($content['field_detail_color'])) AND ( render($content['field_detail_color_type']) == 'Background') ): ?>#<?php print render($content['field_detail_color']); ?><?php endif; ?>" data-color-hover="<?php if ( (render($content['field_detail_color'])) AND (render($content['field_detail_color_type']) == 'Hover') ): ?>#<?php print render($content['field_detail_color']); ?><?php endif; ?>" class="transform"></div>
	
		</div><!--/ .detail-box-->
  </a>
</div><!--/ .columns-->