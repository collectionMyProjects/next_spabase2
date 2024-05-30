type getIsLikedWithProductIdAndShopIdProps = {
  productId: string;
  shopId: string;
};

export async function getIsLikedWithProductIdAndShopId({
  productId,
  shopId,
}: getIsLikedWithProductIdAndShopIdProps): Promise<{ data: boolean }> {
  return Promise.resolve({ data: true });
}
