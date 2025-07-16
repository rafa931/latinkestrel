const socialMediaPostLinkns = {
  "instagram": 'DMVSPfwMH4d',
  "facebook": 'https://www.facebook.com/photo/?fbid=122154328148801081&set=gm.1459840998775526'
}


function SocialMediaPosts() {
  return (
    <>
    <div className="grid grid-cols-1 h-fit md:grid-cols-2 gap-8 justify-items-center items-center mt-8">
      {/* Instagram static embed */}
      <div className="cardPost xl:w-lg  h-96 border p-2 rounded-lg">
        <iframe className="w-full h-full"
          src="https://www.instagram.com/p/DMVSPfwMH4d/embed"
          allowtransparency="true"
          title="Instagram Post"
        ></iframe>
      </div>
      {/* Facebook static embed */}
      <div className="cardPost xl:w-lg h-96 border p-2 rounded-lg">
        <iframe className="w-full h-full"
          src={`https://www.facebook.com/plugins/post.php?href=${socialMediaPostLinkns.facebook}`}
          allow="encrypted-media"
          title="Facebook Post"
        ></iframe>
      </div>


      {/* TikTok static embed 
      <div className="flex flex-col items-center">
        <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@latin.kestrel/video/VIDEO_ID" data-video-id="VIDEO_ID" style={{ width: '325px', height: '600px' }}>
          <a href="https://www.tiktok.com/@latin.kestrel/video/VIDEO_ID">Watch on TikTok</a>
        </blockquote>
      </div>
      */}
      {/* Spotify static embed 
      <div className="flex flex-col items-center">
        <iframe
          src="https://open.spotify.com/embed/track/TRACK_ID"
          width="320"
          height="80"
          frameBorder="0"
          allow="encrypted-media"
          title="Spotify Track"
        ></iframe>
      </div>
      */}
    </div>
    </>
  );
}

export default SocialMediaPosts;