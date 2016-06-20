<?php
/**
 * Shortcode module
 *
 * @package Top_Ten
 */

/**
 * Creates a shortcode [tptn_list limit="5" heading="1" daily="0"].
 *
 * @since	1.9.9
 * @param	array  $atts       Shortcode attributes.
 * @param	string $content    Content.
 * @return	string	Formatted list of posts generated by tptn_pop_posts
 */
function tptn_shortcode( $atts, $content = null ) {
	global $tptn_settings;

	$atts = shortcode_atts( array_merge(
		$tptn_settings,
		array(
			'heading' => 1,
			'daily' => 0,
			'is_shortcode' => 1,
		)
	), $atts, 'top-10' );

	return tptn_pop_posts( $atts );
}
add_shortcode( 'tptn_list', 'tptn_shortcode' );


/**
 * Creates a shortcode [tptn_views daily="0"].
 *
 * @since	1.9.9
 * @param	array  $atts       Shortcode attributes.
 * @param	string $content    Content.
 * @return	string	Views of the post
 */
function tptn_shortcode_views( $atts, $content = null ) {
	$a = shortcode_atts( array(
		'daily' => '0',
	), $atts );

	return get_tptn_post_count_only( get_the_ID(), ( $a['daily'] ? 'daily' : 'total' ) );
}
add_shortcode( 'tptn_views', 'tptn_shortcode_views' );

