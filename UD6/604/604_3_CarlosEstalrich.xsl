<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:strip-space elements="*" /> <!-- Lleva els espais en blanc a tots els elements -->

    <xsl:template match="secondary-school">
        <html>
            <body>
                <h1>
                    <xsl:value-of select="name" />
                </h1>
                <p>Web page:
                    <a>
                        <xsl:attribute name="href">
                            <xsl:value-of select="web" />
                        </xsl:attribute>
                        <xsl:value-of select="web" />
                    </a>
                </p>
                <xsl:apply-templates />
            </body>
        </html>
    </xsl:template>

    <xsl:template match="name"></xsl:template>

    <xsl:template match="web"></xsl:template>

    <xsl:template match="cycle">
        <table>
            <xsl:attribute name="border">1</xsl:attribute>
            <tr>
                <th>Cycle name</th>
                <th>Grade</th>
                <th>Year of title</th>
            </tr>
            <xsl:apply-templates /> <!-- select="cycle[decreeTitle/@year=2008]" // select="cycle[grade='Higher']" filtra per any -->
        </table>
    </xsl:template>

    <xsl:template match="cycle">
        <tr>
            <td>
                <xsl:value-of select="name" />
            </td>
            <td>
                <xsl:value-of select="grade" />
            </td>
            <td>
                <xsl:value-of select="decreeTitle/@year" />
            </td>
        </tr>
    </xsl:template>

</xsl:stylesheet>