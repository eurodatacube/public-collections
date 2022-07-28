# Pricing

## Calculation

The price of an order is proportionate to the amount of data that will have to be processed. For a user-defined area of interest (AOI), the current algorithm will process all tiles of a 10km UTM grid used by Sentinel Hub Batch API that intersect with the AOI. The grid can be found in [documentation](https://docs.sentinel-hub.com/api/latest/api/batch/#tiling-grids). For each of these grid tiles of size `10km x 10km` the number of Sentinel-2 time frames is calculated according to user-defined time interval. The total price is calculated from the total number of time frames of all grid tiles:

- `0.8€` per grid tile time frame if there are at most `100` time frames,
- `0.6€` per grid tile time frame if the total number of time frames is larger.

The minimal price of any order is `50€`.

## Restrictions

To ensure fast and reliable execution, current running restrictions are:

- at most `100` grid tiles,
- at most `10` time frames for each grid tile.

In the future these numbers might be increased. For now, larger orders can be split into smaller ones and placed at the same time.

## Custom Orders

For an order that doesn't fit the current restrictions please contact us at [info@sentinel-hub.com](mailto:info@sentinel-hub.com).
