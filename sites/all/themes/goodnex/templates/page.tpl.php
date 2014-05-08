<?php
/**
 * @file
 * Goodnex's theme implementation to display a single Drupal page.
 */
?>

<div id="wrapper">
  <header id="header">
    <div class="container">
    
      <div class="eight columns">

	      <?php if (isset($page['header_left'])) : ?>
		      <?php print render($page['header_left']); ?>
		    <?php endif; ?>
	    
	      <?php if ($logo): ?>
	        <h1 class="logo">
			      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
			        <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
			      </a>
	        </h1>
		    <?php endif; ?>
		    
		    <?php if ($site_name || $site_slogan): ?>
		      <div id="name-and-slogan"<?php if ($disable_site_name && $disable_site_slogan) { print ' class="hidden"'; } ?>>
		
		        <?php if ($site_name): ?>
		          <h1 id="site-name"<?php if ($disable_site_name) { print ' class="hidden"'; } ?>>
		            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
		          </h1>
		        <?php endif; ?>
		
		        <?php if ($site_slogan): ?>
		          <div id="site-slogan"<?php if ($disable_site_slogan) { print ' class="hidden"'; } ?>>
		            <?php print $site_slogan; ?>
		          </div>
		        <?php endif; ?>
		
		      </div> <!-- /#name-and-slogan -->
		    <?php endif; ?>
		    
      </div>
      
      <div class="eight columns">
        <?php print render($page['header_right']); ?>
     </div>  
     
     <div class="clear"></div>
     
     <div class="sixteen columns">
				<div class="menu-container clearfix">
					<nav id="navigation" class="navigation">
					  <div class="menu">
					    <?php print render($page['header_menu']); ?>
					  </div>  
					</nav>
					
					<?php if ( ($page['header_search']) ): ?>
						<div class="search-wrapper">
						  <?php print render($page['header_search']); ?>
						</div><!--/ .search-wrapper--> 
					<?php endif; ?>
					
				</div>
     </div>
     
    </div>  				
	</header>
	<?php print render($page['before_content_no_wrap']); ?>
  <section id="content">
	  <div class="container">
	    
	    <?php if ($title) : ?>
			
	    <div class="page-header clearfix">
            
		    <?php if ( ($breadcrumb) AND (theme_get_setting('breadcrumbs') == '1') ): ?>
				  <div id="breadcrumbs"><?php print $breadcrumb; ?> </div>	
				<?php endif; ?>
				    
				<h1 class="alignleft"><?php print $title; ?></h1>
			</div><!--/ .page-header-->
			<?php endif; ?>
	    
	    <?php print render($page['before_content']); ?>
	    
	    <?php if ( ($page['sidebar_left']) ) : ?>
		  <aside id="sidebar" class="four columns">
		    <?php print render($page['sidebar_left']); ?>
		  </aside>
		  <?php endif; ?>
		  
		  <?php if ( ($page['sidebar_right']) AND ($page['sidebar_left']) ): ?>
		  <section id="main" class="eight columns">
		  <?php endif; ?>
	   
	    <?php if ( (($page['sidebar_right']) AND (!$page['sidebar_left'])) OR ($page['sidebar_left']) AND (!$page['sidebar_right']) ): ?>
		  <section id="main" class="twelve columns">
		  <?php endif; ?>
		  
			  <?php print $messages; ?>
			  
	     	<?php if ($tabs = render($tabs)): ?>
				  <div id="drupal_tabs" class="tabs">
				    <?php print render($tabs); ?>
				  </div>
			  <?php endif; ?>
	      <?php print render($page['help']); ?>
	      <?php if ($action_links): ?>
	        <ul class="action-links">
	          <?php print render($action_links); ?>
	        </ul>
	      <?php endif; ?>
	
			  <?php if (isset($page['content'])) { print render($page['content']); } ?>
			  
			<?php if ( ($page['sidebar_right']) OR ($page['sidebar_left']) ): ?>
		  </section>
		  <?php endif; ?>
		  
		  <?php if ( ($page['sidebar_right']) ) : ?>
		  <aside id="sidebar" class="four columns">
		    <?php print render($page['sidebar_right']); ?>
		  </aside>
		  <?php endif; ?>
		    
    </div>
    
    <div id="after-content" class="container">
      <?php print render($page['after_content']); ?>
    </div>
    
  </section> 

  <?php print render($page['after_content_no_wrap']); ?>

  <footer id="footer">
    <div class="container">
		  
	    <div class="four columns">
	      <?php if (isset($page['footer_1'])) : ?>
			    <?php print render($page['footer_1']); ?>
			  <?php endif; ?>
	    </div>
	    
	    <div class="four columns">
	      <?php if (isset($page['footer_2'])) : ?>
			    <?php print render($page['footer_2']); ?>
			  <?php endif; ?>
	    </div>
	    
	    <div class="four columns">
	      <?php if (isset($page['footer_3'])) : ?>
			    <?php print render($page['footer_3']); ?>
			  <?php endif; ?>
	    </div>
	    
	    <div class="four columns">
	      <?php if (isset($page['footer_4'])) : ?>
			    <?php print render($page['footer_4']); ?>
			  <?php endif; ?>
	    </div>

      <div class="clear"></div>
      
      <div class="sixteen columns">
        <div class="adjective clearfix">
		   		    
				  <?php if (isset($page['footer_bottom'])) : ?>
				    <?php print render($page['footer_bottom']); ?>
				  <?php endif; ?>
		  
		    </div>
      </div>
	  </div>  
	</footer>
	
</div>