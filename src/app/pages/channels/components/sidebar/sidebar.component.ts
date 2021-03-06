import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../services/api/user.service';
import { GuildService } from '../../../../services/api/guild.service';
import { MatDrawer } from '@angular/material/sidenav';
import { ChannelService } from 'src/app/services/api/channel.service';
import { PingService } from 'src/app/services/ping.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateGuildComponent } from 'src/app/components/dialog/create-guild/create-guild.component';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('drawer')
  private drawer: MatDrawer;

  public get guilds() {
    return this.guildService.guilds || [];
  }
  public get user() {
    return this.userService.self;
  }

  constructor(
    public channelService: ChannelService,
    public guildService: GuildService,
    private userService: UserService,
    public dialog: DialogService,
  ) {}

  public toggle() {
    const icon = document.querySelector('#nav-icon1');
    icon.classList.toggle('open');
    this.drawer.toggle();
  }
}
