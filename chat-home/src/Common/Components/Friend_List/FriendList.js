import React, { Component } from 'react';
import Friend from '../Friend/Friend';

class FriendList extends Component {
  dummyData = [
    {
      onlineStatus: 1,
      name: "Todd Peterson",
      status: "Lorem ipsum dolor sit amet conse",
      nearestOnline: "2 min ago",
      messageCount: 0,
      faceImageUrl: "https://s3-alpha-sig.figma.com/img/4375/ddb0/83d09c7f77fd10070d8c6eca76434b3d?Expires=1566172800&Signature=Hl97-Kqdk9XgYzX1HU5Z34JwR8pJIapkBAGYfclPY-VFwfMcS1qInXTa1jfAFElrMDaiCxwcF3KXfxWRkWqlXtaeWZy6s0gDW3wGRTPaLZiEVlOurZ0kDRWe0SNlPMnwNUBJVdt91cI36Ul3gJBu8rAWlqRUjYhVKvvMWJogKHlJvkNShvjXODJboy7vTkb~CdDT2g4HCawJNvkevu9l0IdVo~MfsU91PiMSgEYPuFMOeCWt4-R9~-kL2mN38iDGGyU1UPNKSnctW46O43v0N3YUjHLyT6kfB0hFWpXr1L2TnHDoga8oaL4T9luwg76r-6s-Ks-MYMYl~rFtQzv-Ug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"    

    },
    {
      onlineStatus: 1,
      name: "Claude Castro",
      status: "Lorem ipsum dolor sit amet conse",
      nearestOnline: "16:30",
      messageCount: 0,
      faceImageUrl: "https://s3-alpha-sig.figma.com/img/cd4d/37bd/1aacc9ab4bc1ddf6da18ff2a4af7c287?Expires=1566172800&Signature=d0RAiYKDXqlVkTlnfZcI5tcqWEOm7AHePnCr2yxqtDHwDRnbuaVOHT4RZ3TGi7xRPGfaW9TiSYcYkdf86~9nOPVpcUgf8Dy2RzTj1g-2yoZZS94TSpn-LByBr8Dmjvqs~iKgcpPh5bB~Ml6Jq1Lpzc-Uvtf42dCcpNKkWps35Yr8N8TSukyeUdo89W1O7emTNgA~j1FIb~ETbbZS~xbRTQwfPB53LpisVmd2YCFqfYhlxv6MjS909uqNbeK8oRtVK0NaKfo96oO0IETUy~nZzjLAUSrGO1fS~ekd2HcKjcVaMYvtq1l8dhi4QAcExqqI8Ox4g-umzKcZuNyHiDS4hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"    

    },
    {
      onlineStatus: 1,
      name: "Clara Morris",
      status: "Lorem ipsum dolor sit amet conse",
      nearestOnline: "18:20",
      messageCount: 5,
      faceImageUrl: "https://s3-alpha-sig.figma.com/img/6894/02e1/fc335e74544c850753c8ad77b30a3900?Expires=1566172800&Signature=M33FMFJx2ZyFMX8ACYUcDNKE~rn9nI1VeauGAaEb8DM~lDKKtm6A9bcu6fhYMha10eKxM-rQgBFrjwO0ldWOHSEC-YAkM1dc-IiW--bCmkMCtPDGXKtMmksTZh-xFtk73MAp3thFShKooIqn54lx2wrgrvme2t3Cp5WKF6WBeau3e1BVc5jRmVxpPucaR9iy~lxbG6JqaKVHzcg9FyHimpbNJe-nNNaLEzKznwy8AZgd~rJIkz0JC50HB8qOMNIW4TUmxedVj0E6YvfCVYKxCl8szOxIz3HeGKVzb4PhseAKX4WfGG-NJmhO1sZzK~DLqaV-0S~XIZKEzlLl3vO6jw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      onlineStatus: 2,
      name: "Rachel Frazier",
      status: "Lorem ipsum dolor sit amet conse",
      nearestOnline: "17:55",
      messageCount: 0,
      faceImageUrl: "https://s3-alpha-sig.figma.com/img/c58c/398e/a4deef8a0dd7aaa43f8656757d0730c3?Expires=1566172800&Signature=Qw-jMloexD-9LpA7b4t93ICNY0d03A2tmheHLyFV7tUETC-aDSrUny8sIfhIgOPCwjnozaxrlBtTqQhHnkcZR3bVmHM1goPy9nywuLPFY5zK5MOotUqn43CptAZtT27IZcd~gez0EoNKJ6X5bkWyqoV3~Xp8rREp3U-WpGTUGsDDNjIJXdM9B1OARXRyQlqYczs9tRDmNQS3ICeX4pDxnYQhJqr11p7-CITaOtMsZNgvk1C7wGbJr4a-s2ylyXE6C~MrTKMxwXb~O3ooh5eyOQ2FRwAP31brQo5k8OIU8fDWpRaoejU16Jj587LELRKKka5BxxyXiT2CQbd5qqRKAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      onlineStatus: 4,
      name: "Rachel Frazier",
      status: "Lorem ipsum dolor sit amet conse",
      nearestOnline: "15 Apr 10:02",
      messageCount: 0,
      faceImageUrl: "https://s3-alpha-sig.figma.com/img/b143/0a4f/54d47a1917227ca4499c8c37e9d60d1f?Expires=1566172800&Signature=E4Wz10Tm5wyoPNgX95qxSWh26CYJs0mbruxdLk4buhLYE1Lu875iZUFiO90vh0p8TKFKxulCHVIHMuqwr0mHMjz-MQFmrR-h1t7AXan5AhqzcBdwts-MddVkM31k2V3eifOjK-mWix1Ql4hGM5FklUrWKY1tLpb3YhdZaMY1NAPJQ0pJ10euEq9sTXBmFmZbl81b-dQjGOraYYn7dv7a8YbrkRabhlSdzbCniMhSiO7Q8vGCCo~8uFn2~6aZogCXWDgFyflbyGR5y6Kuhbv56JHeXt8ApcCQj2qgzT8u686xX9rNcGXNBhG22f5Mt0ZxFoObhxBYIBttr7T3Obu-dA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"    

    }
  ];
  render() {
    
    let render = this.dummyData.map(function(item, index){
      return <Friend key={index} 
          onlineStatus={item.onlineStatus} 
          name={item.name} 
          status={item.status} 
          nearestOnline={item.nearestOnline}
          messageCount={item.messageCount}
          faceImageUrl={item.faceImageUrl}>      
          </Friend>   
    });
    
    return (
      
      <div className="friend-list">
        {render}
      </div>
    )
  }
}
export default FriendList;