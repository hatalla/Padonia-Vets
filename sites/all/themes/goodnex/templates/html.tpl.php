<?php
/**
 * @file
 * Goodnex's HTML template.
 */
?>
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="ie6 ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if IE 7]>    <html class="ie7 ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if IE 8]>    <html class="ie8 ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if gt IE 8]> <!--> <html class="
not-ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <!--<![endif]-->
<head>

<?php print $head; ?>
<title><?php print $head_title; ?></title>
<?php print $styles; ?>
<?php print $scripts; ?>
  
<!-- IE Fix for HTML5 Tags -->
<!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

<!-- Google Web Fonts
================================================== -->
<link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,600italic|Handlee' rel='stylesheet' type='text/css'>  
	
<?php goodnex_user_css(); ?>  

<?php if ( (theme_get_setting('sticky_header') == '1') ): ?>
	<script type='text/javascript' src='<?php global $parent_root; echo $parent_root; ?>/js/sticky.js'></script>
<?php endif; ?>

</head>

<body class="<?php print $classes; ?> <?php print theme_get_setting('site_layout'); ?> <?php print theme_get_setting('skin_style'); ?> <?php print theme_get_setting('background_select'); ?> <?php print theme_get_setting('color_scheme'); ?> " <?php print $attributes;?>>
<?php print $page_top; ?>
<?php print $page; ?>
<?php print $page_bottom; ?>

</body>
</html>