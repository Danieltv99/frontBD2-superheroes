import { Component, OnInit } from '@angular/core';

interface Multimedia {
  id: number;
  title: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-multimedia-crud',
  templateUrl: './multimedia-crud.component.html',
  styleUrls: ['./multimedia-crud.component.css']
})
export class MultimediaCrudComponent implements OnInit {
  multimediaList: Multimedia[] = [];
  newMultimedia: Multimedia = { id: 0, title: '', description: '', url: '' };
  editMultimedia: Multimedia | null = null;

  ngOnInit(): void {
    // Inicializa con algunos datos de ejemplo
    this.multimediaList = [
      { id: 1, title: 'Video 1', description: 'Descripción del video 1', url: 'http://example.com/video1' },
      { id: 2, title: 'Video 2', description: 'Descripción del video 2', url: 'http://example.com/video2' }
    ];
  }

  addMultimedia(): void {
    this.newMultimedia.id = this.multimediaList.length + 1;
    this.multimediaList.push(this.newMultimedia);
    this.newMultimedia = { id: 0, title: '', description: '', url: '' };
  }

  edit(multimedia: Multimedia): void {
    this.editMultimedia = { ...multimedia };
  }

  updateMultimedia(): void {
    if (this.editMultimedia) {
      const index = this.multimediaList.findIndex(m => m.id === this.editMultimedia!.id);
      this.multimediaList[index] = this.editMultimedia;
      this.editMultimedia = null;
    }
  }

  deleteMultimedia(id: number): void {
    this.multimediaList = this.multimediaList.filter(m => m.id !== id);
  }

  cancelEdit(): void {
    this.editMultimedia = null;
  }
}
