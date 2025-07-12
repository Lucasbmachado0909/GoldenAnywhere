// src/modules/lessons/components/VideoSection.tsx
import React from 'react';
import VideoPlayer from '../../common/components/VideoPlayer';
import type { VideoResource } from '../../../types';

interface VideoSectionProps {
  title: string;
  description?: string;
  videoResource: VideoResource;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  description,
  videoResource
}) => {
  return (
    <section className="mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        {description && (
          <p className="mb-4 text-gray-700 leading-relaxed">{description}</p>
        )}
      </div>
      <VideoPlayer
        src={videoResource.src}
        title={videoResource.title}
        thumbnail={videoResource.thumbnail}
      />
    </section>
  );
};

export default VideoSection;