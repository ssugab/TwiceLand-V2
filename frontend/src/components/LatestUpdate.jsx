import React from 'react';

// 1. Data tiruan untuk berita
const mockUpdates = [
  {
    id: 1,
    image: 'https://via.placeholder.com/400x250', // Ganti dengan URL gambar asli nanti
    title: 'TWICE Announces World Tour "READY TO BE"',
    excerpt: 'The global tour kicks off in Seoul, promising spectacular performances across continents.'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/400x250',
    title: 'New Mini Album "BETWEEN 1&2" Hits #1 on Charts',
    excerpt: 'The latest release showcases a mature sound and has been met with critical acclaim.'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/400x250',
    title: 'Mina, Sana, and Momo Debut as "MISAMO"',
    excerpt: 'The Japanese sub-unit has released their first mini-album, topping charts in Japan.'
  },
];

const LatestUpdates = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto relative pt-10">
        
        <div className='absolute top-[-55px] left-0 w-full flex justify-between items-start'>
          
          <div>
            <h2 className="lg:text-7xl md:text-5xl sm:text-2xl font-display-bold text-matteblack">
              Latest Updates
            </h2>
          </div>

          <div className='flex items-end'> {/* Onlcick tab state feature later */}
            <div className='w-40 py-2 flex justify-center items-center text-matteblack bg-accent/50 rounded-t-xl font-display-bold'>
              July
            </div>
            <div className='w-90 h-24 ml-2 flex justify-center items-center text-matteblack text-2xl rounded-t-2xl font-display-bold bg-accent'>
              August
            </div>
          </div>

        </div>
        
        {/* Auto update news */}
        <div className='bg-accent p-8 rounded-2xl rounded-tr-none'>
          {/* Grid untuk kartu berita, responsif */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 2. Gunakan .map() untuk membuat kartu dari data */}
            {mockUpdates.map((update) => (
              <div key={update.id} className="bg-white rounded-xl shadow-md overflow-hidden 
                                              hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                
                <img src={update.image} alt={update.title} className="w-full h-48 object-cover" />

                <div className="p-6">
                  <h3 className="text-xl font-display-bold text-matteblack mb-2">{update.title}</h3>
                  <p className="text-matteblack/80 font-subtitle mb-4">{update.excerpt}</p>
                  <a href="#" className="font-display text-accent hover:underline">
                    Read More →
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default LatestUpdates;