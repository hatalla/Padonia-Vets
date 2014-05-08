<?php
/**
 * @file comment.tpl.php
 * Goodnex's comment template.
 */
 
global $parent_root;
?>

<ol class="comments-list">
  <li class="comment">
    <article>
		  <div class="gravatar">
		    <?php 
		      if (!$picture) {
		        echo '<img src="'.$parent_root.'/images/gravatar.jpg" alt="anon">'; 
		      }
		      else { 
		        print $picture;   
		      }
		    ?>
		  </div>
		  <div class="comment-body"> 
        <div class="comment-meta">
          <div class="comment-author"><?php print $author; ?></div>
	        <div class="comment-date"><?php print format_date($comment->created, 'custom', 'M d, Y'); ?></div>
	        <span class="pull-right">
	          <?php if (!empty($content['links'])) { print render($content['links']); } ?>
	        </span>
        </div>

		    <?php if ($new): ?>
		    <span class="new"><?php print $new ?></span>
		    <?php endif; ?>
		    
		    <div class="comment-content"<?php print $content_attributes; ?>>
		      <div class="row">
		      <p>
		      <?php hide($content['links']); print render($content); ?>
		      </p>
		      </div>
		      <?php if ($signature): ?>
		       <div class="user-signature clearfix">
		         <?php print $signature ?>
		      </div>
		     <?php endif; ?>
		    </div>
		    
      </div>
    </article>
  </li>
</ol>