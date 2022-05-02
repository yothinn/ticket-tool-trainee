import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule()
export class IconsModule
{
    /**
     * Constructor
     */
    constructor(
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry
    )
    {
        // Register icon sets
        this._matIconRegistry.addSvgIconSet(this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-twotone.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('mat_outline', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-outline.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('mat_solid', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-solid.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('iconsmind', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/iconsmind.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('feather', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/feather.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('heroicons_outline', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/heroicons-outline.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('heroicons_solid', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/heroicons-solid.svg'));

        // Ais icon
        this._matIconRegistry.addSvgIcon('delete', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-delete.svg'));
        this._matIconRegistry.addSvgIcon('external', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-external.svg'));
        this._matIconRegistry.addSvgIcon('home', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-home.svg'));
        this._matIconRegistry.addSvgIcon('myticket', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-myticket.svg'));
        this._matIconRegistry.addSvgIcon('problem', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-problem.svg'));
        this._matIconRegistry.addSvgIcon('report', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-report.svg'));
        this._matIconRegistry.addSvgIcon('sla', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-sla.svg'));
        this._matIconRegistry.addSvgIcon('team', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-team.svg'));
        this._matIconRegistry.addSvgIcon('ticket', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-ticket.svg'));
        this._matIconRegistry.addSvgIcon('user_management', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-user-management.svg'));
    }
}
