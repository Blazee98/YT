import { blockAds } from './lib/adblocker';

await initAdBlocker();

export default {
  async middleware(request) {
    const blocked = blockAds(request);
    if (blocked) return blocked;
    return NextResponse.next();
  }
};
