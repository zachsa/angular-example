import { Component, OnInit } from '@angular/core'
import { MnemosyneService } from '../../services/mnemosyne.service'
import { NestedTreeControl } from '@angular/cdk/tree'
import { MatTreeNestedDataSource } from '@angular/material/tree'
import { of as observableOf } from 'rxjs'

interface Node {
  entry: string
  entries?: Node[]
  path?: String
  isFile?: Boolean
  parent?: String
  isDirectory?: Boolean
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data?: Node[]
  loading: boolean = true
  treeControl = new NestedTreeControl<Node>((node) =>
    observableOf(node.entries ?? [])
  )
  dataSource = new MatTreeNestedDataSource<Node>()

  constructor(private mnemosyneService: MnemosyneService) {}

  hasEntry = (_: number, node: Node) => {
    return node.isDirectory || false
  }

  ngOnInit(): void {
    this.mnemosyneService.getData().subscribe((data) => {
      this.data = data
      this.loading = false
      this.dataSource.data = this.data
    })
  }

  loadEntries(node: Node) {
    const { path } = node
    this.mnemosyneService.getData(path).subscribe((entries) => {
      node.entries = entries
      this.dataSource.data =
        this.data?.map((n) => {
          return n === node ? { ...n, entries } : n
        }) ?? []
      this.treeControl.expand(node)
    })
  }
}
