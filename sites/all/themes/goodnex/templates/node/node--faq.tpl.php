<?php

/**
 * @file node--faq.tpl.php
 * Porto's node template for the FAQ content type.
 */
?>

<span data-mode="" class="acc-trigger">
	<a href="#"><?php echo $title; ?></a>
</span>

<div class="acc-container">
	<p><?php print render($content['body']); ?></p>
</div>