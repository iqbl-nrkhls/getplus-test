import { getBanners } from "models/articles";
import { useEffect, useState } from "react";

export function SectionBanner() {
  const [banners, setBanners] = useState();
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setBanners(await getBanners());
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <div className="p-4">
      {loading ? (
        <p className="my-20 text-center">Loading...</p>
      ) : (
        <img src={banners[0].images} className="w-full h-64 rounded-xl object-cover" />
      )}
    </div>
  );
}
