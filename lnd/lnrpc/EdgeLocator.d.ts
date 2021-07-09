/// <reference types="long" />
import type { Long } from '@grpc/proto-loader';
export interface EdgeLocator {
    'channelId'?: (number | string | Long);
    'directionReverse'?: (boolean);
}
export interface EdgeLocator__Output {
    'channelId': (Long);
    'directionReverse': (boolean);
}
