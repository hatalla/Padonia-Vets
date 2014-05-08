<?php
/**
 * Implements hook_form_system_theme_settings_alter()
 */
function goodnex_form_system_theme_settings_alter(&$form, &$form_state) {
  
  // Main settings wrapper
  $form['options'] = array(
    '#type' => 'vertical_tabs',
    '#default_tab' => 'defaults',
    '#weight' => '-10',
    '#attached' => array(
      'css' => array(drupal_get_path('theme', 'goodnex') . '/css/theme-settings.css'),
    ),
  );
  
  // General
  $form['options']['general'] = array(
    '#type' => 'fieldset',
    '#title' => t('General'),
  );
                
    // Sticky Header
    $form['options']['general']['sticky_header'] = array(
      '#type' => 'checkbox',
      '#title' => t('Sticky Header'),
      '#default_value' => theme_get_setting('sticky_header'),
    );
    
    // Black and White
    $form['options']['general']['black_and_white'] = array(
      '#type' => 'checkbox',
      '#title' => t('Black/White Image Effect'),
      '#default_value' => theme_get_setting('black_and_white'),
    );
    
    // Breadcrumb
    $form['options']['general']['breadcrumbs'] = array(
      '#type' => 'checkbox',
      '#title' => t('Breadcrumbs'),
      '#default_value' => theme_get_setting('breadcrumbs'),
    );
    
  // Color
  $form['options']['color'] = array(
    '#type' => 'fieldset',
    '#title' => t('Color'),
  );  
  
    // Color Scheme
      $form['options']['color']['color_scheme'] = array(
        '#type' => 'select',
        '#title' => 'Color Scheme',
        '#default_value' => theme_get_setting('color_scheme'),
        '#options' => array(
          'color-1' => t('Light Green (default)'),
          'color-2' => t('Light Blue'),
          'color-3' => t('Purple'),
          'color-4' => t('Dark Blue'),
          'color-5' => t('Dark Green'),
          'color-6' => t('Teal'),
          'color-7' => t('Yellow'),
          'color-8' => t('Light Orange'),
          'color-9' => t('Dark Orange'),
          'color-10' => t('Pink'),
          'color-11' => t('Maroon'),
          'color-12' => t('Brown'),
          'color-13' => t('Taupe'),
          'color-14' => t('Grey'),
          'color-15' => t('Red'),
          'color-16' => t('Navy Blue'),
          'custom' => t('Custom'),
        ),
      );
      
      // Custom Color
      $form['options']['color']['custom_color'] = array(
		    '#type' => 'jquery_colorpicker',
		    '#title' => t('Color'),
		    '#default_value' => theme_get_setting('custom_color'),
		    '#states' => array (
          'visible' => array(
            'select[name=color_scheme]' => array('value' => 'custom')
          )
        )
      ); 
    
  // Layout
  $form['options']['layout'] = array(
    '#type' => 'fieldset',
    '#title' => t('Layout'),
  );  
  
    // Skin Style
    $form['options']['layout']['skin_style'] = array(
      '#type' => 'select',
      '#title' => t('Skin Style'),
      '#default_value' => theme_get_setting('skin_style'),
      '#options' => array(
        'normal' => t('Normal (default)'),
        'scribble' => t('Scribble'),
      ),
    );
  
    // Site Layout
    $form['options']['layout']['site_layout'] = array(
      '#type' => 'select',
      '#title' => t('Body Layout'),
      '#default_value' => theme_get_setting('site_layout'),
      '#options' => array(
        'wide' => t('Wide (default)'),
        'boxed' => t('Boxed'),
      ),
    );
        
   //Background
    $form['options']['layout']['background'] = array(
      '#type' => 'fieldset',
      '#title' => '<h3 class="options_heading">Background</h3>',
      '#states' => array (
          'visible' => array(
            'select[name=site_layout]' => array('value' => 'boxed')
          )
        )
    );
    
    // Body Background 
    $form['options']['layout']['background']['body_background'] = array(
      '#type' => 'select',
      '#title' => t('Body Background'),
      '#default_value' => theme_get_setting('body_background'),
      '#options' => array(
        'goodnex_backgrounds' => t('Background Image (default)'),
        'custom_background_color' => t('Background Color'),
      ),
    );
    
    // Background Choices
    $form['options']['layout']['background']['background_select'] = array(
      '#type' => 'radios',
      '#title' => t('Select a background pattern:'),
      '#default_value' => theme_get_setting('background_select'),
      '#options' => array(
        'pattern-1' => 'item',
        'pattern-2' => 'item',
        'pattern-3' => 'item',
        'pattern-4' => 'item',
        'pattern-5' => 'item',
        'pattern-6' => 'item',
        'pattern-7' => 'item',
        'pattern-8' => 'item',
        'pattern-9' => 'item',
        'pattern-10' => 'item',
        'pattern-11' => 'item',
        'pattern-12' => 'item',
        'pattern-13' => 'item',
        'pattern-14' => 'item',
        'pattern-15' => 'item',
      ),
      '#states' => array (
          'visible' => array(
            'select[name=body_background]' => array('value' => 'goodnex_backgrounds')
          )
        )
      );  
    
      // Custom Background Color
      $form['options']['layout']['background']['body_background_color'] =array(
        '#type' => 'jquery_colorpicker',
		    '#title' => t('Body Background Color'),
		    '#default_value' => theme_get_setting('body_background_color'),
	      '#states' => array (
	        'visible' => array(
	          'select[name=body_background]' => array('value' => 'custom_background_color')
	        )
        )
      );   
      
      // Portfolio Columns
      $form['options']['layout']['portfolio_columns'] = array(
        '#type' => 'select',
        '#title' => t('Portfolio Columns'),
        '#default_value' => theme_get_setting('portfolio_columns'),
        '#options' => array(
          'eight columns' => 'Two',
          'one-third column' => 'Three',
          'four columns' => 'Four (default)',
        ),
      ); 
      
  // Post Meta
  $form['options']['meta'] = array(
    '#type' => 'fieldset',
    '#title' => t('Post Meta'),
  );
                
    // Meta Title
    $form['options']['meta']['meta_title'] = array(
      '#type' => 'checkbox',
      '#title' => t('Meta Title'),
      '#default_value' => theme_get_setting('meta_title'),
    );
    
    // Meta Date
    $form['options']['meta']['meta_date'] = array(
      '#type' => 'checkbox',
      '#title' => t('Meta Date'),
      '#default_value' => theme_get_setting('meta_date'),
    );
    
    // Meta Author
    $form['options']['meta']['meta_author'] = array(
      '#type' => 'checkbox',
      '#title' => t('Meta Author'),
      '#default_value' => theme_get_setting('meta_author'),
    );   
    
    // Meta Date
    $form['options']['meta']['meta_tags'] = array(
      '#type' => 'checkbox',
      '#title' => t('Meta Tags'),
      '#default_value' => theme_get_setting('meta_tags'),
    );
    
    // Meta Comments
    $form['options']['meta']['meta_comments'] = array(
      '#type' => 'checkbox',
      '#title' => t('Meta Comments'),
      '#default_value' => theme_get_setting('meta_comments'),
    );
    
  // CSS
  $form['options']['css'] = array(
    '#type' => 'fieldset',
    '#title' => t('CSS'),
  );
  
    // User CSS
      $form['options']['css']['user_css'] = array(
        '#type' => 'textarea',
        '#title' => t('Add your own CSS'),
        '#default_value' => theme_get_setting('user_css'),
      );     
}
?>