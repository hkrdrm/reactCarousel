<?php
  $query_images_args = array(
    'post_type' => 'attachment', 'post_mime_type' =>'image', 'post_status' => 'inherit', 'posts_per_page' => -1,
  );

  $query_images = new WP_Query( $query_images_args );
  $images = array();
  foreach ( $query_images->posts as $image) {
      $images[]= wp_get_attachment_url( $image->ID );
  }
  $promo = array();

  foreach($images as $i){
    $pos = strpos($i, "promo");
    if($pos === false){
    }
    else{
      $promo[]= $i;
    }
  }
  echo "<script>var images = " . json_encode($promo) . "</script>";
?>
