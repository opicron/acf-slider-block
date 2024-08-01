<?php
/**
 * Slide block.
 *
 * @param array  $block The block settings and attributes.
 * @param string $content The block inner HTML (empty).
 * @param bool   $is_preview True during backend preview render.
 * @param int    $post_id The post ID the block is rendering content against.
 *                     This is either the post ID currently being displayed inside a query loop,
 *                     or the post ID of the post hosting this block.
 * @param array $context The context provided to the block by the post or it's parent block.
 */

$slide_img   = get_field( 'image' );
$slide_title = get_field( 'title' ) ? get_field( 'title' ) : $block['slideTitle'];
$position = get_field( 'object_position' ) ? get_field( 'object_position' ) : $block['slideObjectPosition'];

$height = $context['acf/fields']['height'];
if ( $is_preview && empty($height) )
  $height = $context['acf/fields']['field_66a38b3da6bbf']; //any way to get this dynamic?

// Build a valid style attribute for background and text colors. // esc_attr( $style );

$styles = array( 'object-position: ' . $position, 'height: ' . $height );
$style  = implode( '; ', $styles );


if ( $slide_img['ID'] ) {
	$slide_src = wp_get_attachment_url( $slide_img['ID'] );
	$slide_img = wp_get_attachment_image( $slide_img['ID'], 'full', '', array( 'data-src' => $slide_src, 'style' => esc_attr( $style ), 'class' => 'wp-block-wpe-slide__img' ) );
	//$slide_img = wp_get_attachment_image( $slide_img['ID'], 'full', '', array( 'style' => 'object-position:'.$position.';', 'class' => 'wp-block-wpe-slide__img' ) );
} else {
	$slide_img = '<img data-src="'.plugins_url( $block['slideImg']['src'], __FILE__ ).'" style="'.esc_attr($style).'" src="' . plugins_url( $block['slideImg']['src'], __FILE__ ) . '" height="1080" width="1920" class="wp-block-wpe-slide__img">';
	//$slide_img = '<img style="object-position:'.$position.';" src="' . plugins_url( $block['slideImg']['src'], __FILE__ ) . '" height="1080" width="1920" class="wp-block-wpe-slide__img">';
}

// Support custom id values.
if ( ! empty( $block['anchor'] ) ) {
	$block_id = esc_attr( $block['anchor'] );
}

$block_id = wp_unique_prefixed_id( 'slide-id-' );
$block_classes = 'swiper-slide';
// Grab our alignment class.
if ( '' !== $block['align'] ) {
	$block_classes = ' align' . $block['align'];
}

$title = $context['acf/fields']['title'];
if ( $is_preview && empty($title) )
  $title = $context['acf/fields']['field_66a137e17cc10'];


?>


<?php if ( ! $is_preview ) : ?>

	<div	lightbox-toggle
		<?php
		echo wp_kses_data(
			get_block_wrapper_attributes(
				array(
					'id'    => esc_attr( $block_id ),
					'class' => $block_classes,
				)
			)
		);
		?>
	>

<?php endif; ?>

	<?php /*<a href="$slide_src;";*/ ?>
	<?php echo wp_kses_post( $slide_img ); ?>

	<?php if ( $title ) : ?>
		<p class="wp-block-wpe-slide__copy"><?php echo esc_html( $slide_title ); ?></p>
	<?php endif; ?>
	<?php /*</a>*/ ?>

<?php if ( ! $is_preview ) : ?>
	</div>
<?php endif; ?>
